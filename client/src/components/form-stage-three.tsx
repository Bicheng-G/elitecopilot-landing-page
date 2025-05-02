import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormStageProps } from "@/lib/form-schema";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FormStageThree({ formData, setFormData, nextStage, prevStage }: FormStageProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, businessDetails: e.target.value });
  };

  return (
    <div className="px-3 sm:px-6 pb-4 sm:pb-6 relative">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Step 3 of 5
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Anything we should know about your business?</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">Help us understand your needs</p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <Textarea 
          className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
          rows={5}
          placeholder="Tell us about your business needs, current challenges, or what you hope to achieve..."
          value={formData.businessDetails || ""}
          onChange={handleInputChange}
        />
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
          className="text-teal-800 px-8 sm:px-10 py-5 sm:py-6 text-xs sm:text-base "
        >
          Next
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
