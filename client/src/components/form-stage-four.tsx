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
    <div className="px-3 sm:px-6 pb-4 sm:pb-6 relative">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Step 4 of 5
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Alright! Which email should we send this info to?</h3>
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
            // ADD absolute, bottom-0, left-0, and some margin for spacing (e.g., mb-4 ml-4)
            className="absolute bottom-0 left-0 lg:bottom-1.5 mb-4 ml-3 py-5 text-xs sm:text-sm"
          >
            <ChevronLeft className="" />
        </Button>
        <Button 
          type="button"
          onClick={handleNext} 
          className="text-teal-800 px-8 sm:px-10 py-5 sm:py-6 text-xs sm:text-base "
        >
          Next
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
