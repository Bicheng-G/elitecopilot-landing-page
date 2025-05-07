import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordCarousel } from "@/components/WordCarousel";

export function HeroSection() {
  const carouselWords = [
    "Trucking",
    "Logistic",
    "Oil Tanker",
    "Prime Mover",
    "Construction",
    "Cement Mixer",
    "Tipper Truck",
    "Environmental",
  ];

  return (
    <section className="bg-teal text-white bg-truck-pattern bg-no-repeat bg-right-bottom bg-[size:45%]">
      <div className="container py-12 md:py-20 lg:py-24 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="px-3 md:w-2/3 lg:w-3/5 mb-8 md:mb-0">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-highlight">Singapore Most Trusted</span> Driver & Fleet Safety Solution
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              AI-powered commercial vehicle mobile surveillence system for <span className="text-primary font-bold"><WordCarousel words={carouselWords} /></span> fleets. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange mr-2 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-highlight">
                    Anticipates Driver Behavior
                  </span>{" "}
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange mr-2 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-highlight">
                    Rreduces Incidents
                  </span>{" "}
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange mr-2 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-highlight">
                    Effortless Safety Compliance
                  </span>{" "}
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange mr-2 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-highlight">
                    Easy to Use Cloud Platform
                  </span>{" "}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-6 text-left">
              <Button
                onClick={() => {
                  document.getElementById('lead-form')?.scrollIntoView({behavior: 'smooth'});
                  
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'landing_cta_click',
                    cta_location: 'hero_section',
                  });

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
                className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold text-teal-800 mt-4 sm:mt-6"
                type="button"
              >
                Get a Free Quote & Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
