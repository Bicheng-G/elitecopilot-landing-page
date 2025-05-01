import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormStageProps } from "@/lib/form-schema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function FormStageFour({
  formData,
  setFormData,
  nextStage,
  prevStage,
}: FormStageProps) {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
    setError(null); // Clear error when typing
  };

  const handleNext = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (nextStage) {
      nextStage();
    }
  };

  return (
    <div className="px-3 sm:px-6 pb-4 sm:pb-6">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Step 4 of 5
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Where should we send your quote?</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">Enter your email address</p>
      </div>

      <div className="max-w-lg mx-auto">
        <Input
          type="email"
          className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
          placeholder="example@companyname.com"
          value={formData.email || ""}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}
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
          onClick={handleNext} 
          className="text-teal-800 px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm"
        >
          Next
          <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
