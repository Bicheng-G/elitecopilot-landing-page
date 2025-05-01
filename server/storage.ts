import { 
  users, type User, type InsertUser
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
}

// In-memory storage for fallback/testing
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentUserId: number;

  constructor() {
    this.users = new Map();
    this.currentUserId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

// Use DatabaseStorage only if DATABASE_URL is set, otherwise use MemStorage
let storage: IStorage;

if (process.env.DATABASE_URL) {
  try {
    // Attempt to use DatabaseStorage only if the URL is provided
    storage = new DatabaseStorage(); 
    console.log("Using database storage."); // Keep log conditional
  } catch (error) {
    console.warn("DATABASE_URL is set but failed to initialize database storage, falling back to in-memory storage:", error);
    storage = new MemStorage();
  }
} else {
  // If DATABASE_URL is not set, directly use MemStorage without warnings
  console.log("DATABASE_URL not set. Using in-memory storage.");
  storage = new MemStorage();
}

export { storage };
