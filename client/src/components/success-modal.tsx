import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

// Define window with dataLayer property for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  // Track form submission when modal opens
  useEffect(() => {
    if (open && typeof window !== 'undefined' && window.dataLayer) {
      // Push form submission event to Google Tag Manager
      window.dataLayer.push({
        'event': 'form_submission',
        'form_name': 'quote_request',
        'conversion_type': 'lead'
      });
      
      console.log('Form submission tracked in GTM');
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">Request Submitted!</DialogTitle>
            <DialogDescription className="text-gray-600">
              Thank you for your interest in Elite Copilot. A member of our team will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button onClick={onClose} className="px-8">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
