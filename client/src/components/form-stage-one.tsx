import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FormStageProps } from "@/lib/form-schema";
import {
  Truck,
  User,
  Cloud,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";

type ServiceOption = {
  value: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const serviceOptions: ServiceOption[] = [
  {
    value: "Blind Spot Detection, Pedestrian Warning",
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "Blind Spot Detection, Pedestrian Warning",
    description:
      "Provide visibility to blind spots and provide sound and visual alert to the surrounding pedesterians.",
  },
  {
    value: "Driver Behavior, Fatigue Monitoring",
    icon: <User className="h-6 w-6 text-primary" />,
    title: "Driver Behavior, Fatigue Monitoring",
    description:
      "Monitor driving patterns and detect fatigue and unsafe driving behaviors for evidence-based training.",
  },
  {
    value: "On-Demand Video On Cloud",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "On-Demand Video On Cloud",
    description: "The video evidence is stored in the cloud, and can be accessed on-demand for analysis. Remote management to fleet operations.",
  },
  {
    value: "Safety Compliances",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    title: "Safety Compliances",
    description: "Manage compliance, fulfill regulatory requirements, and cultivate safety culture.",
  },
];

export function FormStageOne({
  formData,
  setFormData,
  nextStage,
}: FormStageProps) {
  const selectedService = formData.service;

  const handleServiceSelection = (service: string) => {
    setFormData({ ...formData, service });
  };

  const handleNext = () => {
    if (selectedService && nextStage) {
      window.dataLayer = window.dataLayer || [];

      // 2. 只有在满足条件（validated）时推送打点
      window.dataLayer.push({
        event: 'landing_form_interaction',
      });

      nextStage();
    }
  };

  return (
    <div className="px-3 sm:px-6 pt-2 sm:pt-4 pb-4 sm:pb-6">
      <div className="mb-4 sm:mb-6 text-center">
        <h3 className="text-lg sm:text-xl font-semibold">
          First, which solution are you looking for?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          👇 Tap an option below to start
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {serviceOptions.map((option) => (
          <Card
            key={option.value}
            className={cn(
              "form-option-card p-3 sm:p-4 cursor-pointer transition-all group",
              selectedService === option.value
                ? "border-primary bg-secondary text-white shadow-sm shadow-primary"
                : "border hover:border-primary hover:bg-grey-100 hover:text-white hover:shadow-sm hover:shadow-primary",
            )}
            onClick={() => handleServiceSelection(option.value)}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-light-teal rounded-full flex items-center justify-center mr-2 sm:mr-3">
                {option.icon}
              </div>
              <h4
                className={cn(
                  "font-medium transition-colors",
                  selectedService === option.value
                    ? "text-white"
                    : "group-hover:text-secondary",
                )}
              >
                {option.title}
              </h4>
            </div>
            <p
              className={cn(
                "text-xs sm:text-sm transition-colors",
                selectedService === option.value
                  ? "text-gray-200"
                  : "text-gray-600 group-hover:text-gray-600",
              )}
            >
              {option.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <Button
          type="button"
          onClick={handleNext}
          disabled={!selectedService}
          className="text-teal-800 px-8 sm:px-10 py-5 sm:py-6 text-xs sm:text-base "
        >
          Next
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
}
