import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FormStageOne } from "@/components/form-stage-one";
import { FormStageTwo } from "@/components/form-stage-two";
import { FormStageFour } from "@/components/form-stage-four";
import { SuccessModal } from "@/components/success-modal";
import { QuizFormData, quoteFormSchema } from "@/lib/form-schema";
import LandingCTA  from "@/components/ui/landingCta"; 
import { ImageModal } from "@/components/image-modal"; 

export default function HomePage() {
  const [currentStage, setCurrentStage] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [formData, setFormData] = useState<QuizFormData>({
    service: "",
    fleetSize: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: ""
  });

  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);

  const nextStage = () => {
    if (currentStage < 3) {
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
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      company: ""
    });
  };

  const steps = ["Service", "Fleet Size", "Contact & Confirm"];

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

    // Validate form data only when on the final stage
    if (currentStage === 3) {
      const validationResult = quoteFormSchema.safeParse(formData);
      if (!validationResult.success) {
        // console.error("Form validation failed:", validationResult.error.flatten().fieldErrors);
        // Optionally, update a state to display these errors in the UI
        // For now, just alert and prevent submission if validation fails
        const firstError = Object.values(validationResult.error.flatten().fieldErrors)[0]?.[0];
        alert(`Please correct the errors before submitting: ${firstError || 'Validation failed.'}`);
        return; // Stop submission if validation fails
      }
    }

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
        
        <section className="pt-6 md:pt-8 bg-white ">
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center text-secondary mb-6 md:mb-8">
              Solution Overview
            </h2>
          </div>
          <div className="container mx-auto px-3 sm:px-4 flex justify-center">
            <img 
              src="/assets/trucking_solution.jpg" 
              alt="Trucking Solutions" 
              style={{ width: 'auto', height: 'auto', maxWidth: '80%', objectFit: 'cover', cursor: 'pointer' }}
              onClick={openImageModal}
            />
          </div>
        </section>
        
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
              <input type="hidden" name="service" value={formData.service || ''}  />
              <input type="hidden" name="fleetSize" value={formData.fleetSize || ''}  />
              <input type="hidden" name="email" value={formData.email || ''}  />
              <input type="hidden" name="firstName" value={formData.firstName || ''}  />
              <input type="hidden" name="lastName" value={formData.lastName || ''}  />
              <input type="hidden" name="phone" value={formData.phone || ''}  />
              <input type="hidden" name="company" value={formData.company || ''} />
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
                  <FormStageFour 
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
        
        <TestimonialsSection />
        <BenefitsSection />

        
        <SuccessModal 
          open={showSuccessModal} 
          onClose={handleCloseSuccessModal} 
        />

        {isImageModalOpen && (
          <ImageModal 
            src="/assets/trucking_solution.jpg" 
            alt="Trucking Solutions - Enlarged"
            onClose={closeImageModal} 
          />
        )}
      </main>
      
      <SiteFooter />
    </div>
  );
}
