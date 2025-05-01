import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FormStageProps } from "@/lib/form-schema";
import { ChevronRight, ChevronLeft } from "lucide-react";

const fleetSizeOptions = [
  "1-4",
  "5-9",
  "10-24",
  "25-49",
  "50-79",
  "80-499",
  "500+"
];

export function FormStageTwo({ formData, setFormData, nextStage, prevStage }: FormStageProps) {
  const selectedFleetSize = formData.fleetSize;
  
  const handleFleetSizeSelection = (fleetSize: string) => {
    setFormData({ ...formData, fleetSize });
  };

  return (
    <div className="px-3 sm:px-6 pb-4 sm:pb-6">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Step 2 of 5
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">How many vehicles do you have?</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">Select fleet size</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto">
        {fleetSizeOptions.map((size, index) => (
          <Button
            key={size}
            type="button"
            variant="outline"
            className={cn(
              "py-3 sm:py-6 h-auto transition-colors text-sm sm:text-base font-medium",
              selectedFleetSize === size 
                ? "border-primary bg-secondary text-white" 
                : "border hover:border-primary hover:bg-secondary hover:text-white",
              index === fleetSizeOptions.length - 1 ? "col-span-2 md:col-span-1" : ""
            )}
            onClick={() => handleFleetSizeSelection(size)}
          >
            {size}
          </Button>
        ))}
      </div>
      
      <div className="mt-6 sm:mt-8 text-center">
        <Button 
          type="button"
          variant="outline" 
          onClick={prevStage}
          className="mr-3 sm:mr-4 px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm"
        >
          <ChevronLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Back
        </Button>
        <Button 
          type="button"
          className="text-teal-800 px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm"
          onClick={nextStage} 
          disabled={!selectedFleetSize}
        >
          Next
          <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
