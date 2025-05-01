import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormStageProps } from "@/lib/form-schema";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FormStageThree({ formData, setFormData, nextStage, prevStage }: FormStageProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, businessDetails: e.target.value });
  };

  return (
    <div className="px-3 sm:px-6 pb-4 sm:pb-6">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Step 3 of 5
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Tell us about your business</h3>
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
          className="mr-3 sm:mr-4 px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm"
        >
          <ChevronLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Back
        </Button>
        <Button 
          type="button"
          className="text-teal-800 px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm"
          onClick={nextStage}>
          Next
          <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
