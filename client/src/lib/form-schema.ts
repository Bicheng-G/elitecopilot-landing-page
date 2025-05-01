import { z } from "zod";

export interface QuizFormData {
  service: string;
  fleetSize: string;
  businessDetails: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  company: string;
}

export interface FormStageProps {
  formData: QuizFormData;
  setFormData: (data: QuizFormData) => void;
  nextStage?: () => void;
  prevStage?: () => void;
  onSuccess?: () => void;
}

export const quoteFormSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  fleetSize: z.string().min(1, "Please select your fleet size"),
  businessDetails: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Please select your country"),
  company: z.string().optional()
});
