import { CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-teal text-white bg-truck-pattern bg-no-repeat bg-right-bottom bg-[size:45%]">
      <div className="container py-12 md:py-20 lg:py-24 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="px-3 md:w-2/3 lg:w-3/5 mb-8 md:mb-0">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-highlight">Singapore Most Trusted</span> Driver & Fleet Safety Platform
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              AI-powered fleet management software designed for Singapore fleets that: 
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
                    Rreduces Collisions
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
                    Saves Money & Lives
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
