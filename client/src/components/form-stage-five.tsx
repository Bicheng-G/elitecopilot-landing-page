import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FormStageProps } from "@/lib/form-schema";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";


export function FormStageFive({ 
  formData, 
  setFormData, 
  prevStage,
  onSuccess
}: FormStageProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.company) newErrors.company = "Company is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="px-3 sm:px-6 pb-4 sm:pb-6 relative">
      <div className="mb-4 sm:mb-6 text-center">
        <div className="inline-block bg-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
          Final Step
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Lastly, tell us about yourself.</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">We'll use this info to contact you</p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <Input 
              type="text"
              className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
              placeholder="First Name"
              value={formData.firstName || ""}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <Input 
              type="text"
              className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
              placeholder="Last Name"
              value={formData.lastName || ""}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="mb-3 sm:mb-4">
          <Input 
            type="tel"
            className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
            placeholder="Phone"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <Input 
              type="text"
              className="w-full p-3 sm:p-4 text-sm sm:text-base focus:ring-primary border-gray-300"
              placeholder="Company"
              value={formData.company || ""}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
            />
            {errors.company && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.company}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
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
          type="submit"
          className="text-teal-800 px-8 sm:px-10 py-5 sm:py-6 text-xs sm:text-base "
        >
          Confirm Quote Request
        </Button>
      </div>
    </div>
  );
}
