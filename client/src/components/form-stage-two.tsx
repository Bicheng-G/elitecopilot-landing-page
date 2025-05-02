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
    <div className="px-3 sm:px-6 pb-4 sm:pb-6 relative">
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
                ? "border-primary bg-secondary text-white shadow-sm shadow-primary" 
                : "border hover:border-primary hover:bg-grey-100 hover:text-secondary hover:shadow-sm hover:shadow-primary",
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
          // ADD absolute, bottom-0, left-0, and some margin for spacing (e.g., mb-4 ml-4)
          className="absolute bottom-0 left-0 lg:bottom-1.5 mb-4 ml-3 py-5 text-xs sm:text-sm"
        >
          <ChevronLeft className="" />
        </Button>
        <Button 
          type="button"
          onClick={nextStage} 
          disabled={!selectedFleetSize}
          className="text-teal-800 px-8 sm:px-10 py-5 sm:py-6 text-xs sm:text-base "
        >
          Next
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
