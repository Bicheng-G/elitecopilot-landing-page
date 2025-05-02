import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FormStageOne } from "@/components/form-stage-one";
import { FormStageTwo } from "@/components/form-stage-two";
import { FormStageThree } from "@/components/form-stage-three";
import { FormStageFour } from "@/components/form-stage-four";
import { FormStageFive } from "@/components/form-stage-five";
import { SuccessModal } from "@/components/success-modal";
import { QuizFormData } from "@/lib/form-schema";
import LandingCTA  from "@/components/ui/landingCta";

export default function HomePage() {
  const [currentStage, setCurrentStage] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<QuizFormData>({
    service: "",
    fleetSize: "",
    businessDetails: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    company: ""
  });

  const nextStage = () => {
    if (currentStage < 5) {
      setCurrentStage(prev => prev + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 1) {
      setCurrentStage(prev => prev - 1);
    }
  };

  const handleSuccess = () => {
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    // Reset form after closing success modal
    setCurrentStage(1);
    setFormData({
      service: "",
      fleetSize: "",
      businessDetails: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
      company: ""
    });
  };

  const steps = ["Service", "Fleet Size", "Details", "Contact", "Confirm"];

  // Helper function to encode form data for Netlify
  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Define the handleSubmit function for the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default browser submission

    console.log("Submitting form via AJAX to Netlify...");

    fetch("/", { // POST to the root path
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "landing-page-lead-form", // Ensure form name matches
        ...formData // Spread the rest of the form data state
      }),
    })
      .then(() => {
        console.log("Netlify form submission successful!");
        handleSuccess(); // Trigger the success modal
      })
      .catch((error) => {
        console.error("Netlify form submission error:", error);
        // Optionally: Show an error message to the user
        alert(`Submission Error: ${error.toString()}`);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="lead-form" className="py-4 md:py-12 bg-white">
          <div className="container mx-auto px-2 sm:px-4">
            <form
              name="landing-page-lead-form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} // Keep handler attached for logging/potential future use
              // Consider adding a Netlify success page redirect:
              // action="/thank-you/" // Example redirect path
            >
              {/* ... form-name and bot-field hidden inputs ... */}
              <input type="hidden" name="form-name" value="landing-page-lead-form" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              {/* Add `required` attribute to necessary hidden fields for Netlify validation */}
              <input type="hidden" name="service" value={formData.service || ''} required />
              <input type="hidden" name="fleetSize" value={formData.fleetSize || ''} required />
              <textarea hidden name="businessDetails" defaultValue={formData.businessDetails || ''}></textarea>
              <input type="hidden" name="email" value={formData.email || ''} required />
              <input type="hidden" name="firstName" value={formData.firstName || ''} required />
              <input type="hidden" name="lastName" value={formData.lastName || ''} required />
              <input type="hidden" name="phone" value={formData.phone || ''} required />
              <input type="hidden" name="country" value={formData.country || ''} required /> 
              <input type="hidden" name="company" value={formData.company || ''} required/>
              {/* END: Hidden "Ghost" inputs */}

              <Card className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-t-orange mt-2">
                <LandingCTA />
                
                <div className="bg-white px-0 sm:px-4 pt-2 sm:pt-6" id="form-options">
                </div>
                
                {currentStage === 1 && (
                  <FormStageOne 
                    formData={formData} 
                    setFormData={setFormData} 
                    nextStage={nextStage} 
                    prevStage={prevStage}
                    onSuccess={handleSuccess}
                  />
                )}
                
                {currentStage === 2 && (
                  <FormStageTwo 
                    formData={formData} 
                    setFormData={setFormData} 
                    nextStage={nextStage} 
                    prevStage={prevStage}
                    onSuccess={handleSuccess}
                  />
                )}
                
                {currentStage === 3 && (
                  <FormStageThree 
                    formData={formData} 
                    setFormData={setFormData} 
                    nextStage={nextStage} 
                    prevStage={prevStage}
                    onSuccess={handleSuccess}
                  />
                )}
                
                {currentStage === 4 && (
                  <FormStageFour 
                    formData={formData} 
                    setFormData={setFormData} 
                    nextStage={nextStage} 
                    prevStage={prevStage}
                    onSuccess={handleSuccess}
                  />
                )}
                
                {currentStage === 5 && (
                  <FormStageFive 
                    formData={formData} 
                    setFormData={setFormData} 
                    prevStage={prevStage}
                    onSuccess={handleSuccess}
                  />
                )}
              </Card>
            </form>
          </div>
        </section>
        
        <BenefitsSection />
        <TestimonialsSection />
        
        <SuccessModal 
          open={showSuccessModal} 
          onClose={handleCloseSuccessModal} 
        />
      </main>
      
      <SiteFooter />
    </div>
  );
}
