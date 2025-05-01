import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, FileCheck, BarChart } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Proactive Safety Management",
      description:
        "Real-time AI alerts help prevent incidents before they occur, protecting your drivers and fleet assets.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Cost Efficiency",
      description:
        "Detailed analytics on driver behavior and vehicle performance directly translate into lower operational and insurance costs.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Local Compliance Made Simple",
      description:
        "Fully aligned with Singapore's regulatory environment, automatically generating compliance and audit-ready reports.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Operational Visibility",
      description:
        "Comprehensive video telematics provide instant insights, empowering fleet managers with clear data for strategic decision-making.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center text-secondary mb-1 md:mb-2">
          Why Choose Elite Copilot?
        </h2>
        <p className="text-center text-heading text-sm md:text-base mb-4 md:mb-6 max-w-3xl mx-auto">
          Revolutionizing Fleet Safety in Singapore
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange rounded-full flex items-center justify-center mb-3 md:mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-heading">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 bg-light-teal text-white p-4 sm:p-6 rounded-lg max-w-3xl mx-auto">
          <p className="font-medium text-sm md:text-lg">
            Choose Elite Copilot for fleet safety and innovation in Singapore.
          </p>
          <Button
            onClick={() => {
              // Scroll to form options
              document.getElementById('lead-form')?.scrollIntoView({behavior: 'smooth'});
              
              // Add animation class to form option cards
              const optionCards = document.querySelectorAll('.form-option-card');
              if (optionCards.length > 0) {
                optionCards.forEach((card, index) => {
                  // Stagger the animations
                  setTimeout(() => {
                    card.classList.add('highlight-pulse');
                    // Remove the class after animation completes
                    setTimeout(() => {
                      card.classList.remove('highlight-pulse');
                    }, 800);
                  }, index * 200);
                });
              }
            }}
            variant="primary"
            size="lg"
            className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium text-teal-800 mt-4 sm:mt-6" 
            type="button"
          >
            Get a Free Quote & Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
