import { cn } from "@/lib/utils";

export interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="flex justify-between mb-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div 
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              (index + 1) <= currentStep ? "bg-primary text-white" : "bg-gray-300 text-white"
            )}
          >
            {index + 1}
          </div>
          <div className="text-xs mt-1 text-gray-500">{step}</div>
        </div>
      ))}
    </div>
  );
}
