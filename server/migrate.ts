import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import { db } from './db';

// This script will automatically synchronize your database schema with your Drizzle schema
async function main() {
  console.log('Migration started...');
  
  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main();