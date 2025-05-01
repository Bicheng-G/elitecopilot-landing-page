//import { Logo } from "@/components/ui/logo";
import logoSrc from "@/components/ui/logo.svg"; // Import the SVG file as a source (assuming rename)
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-teal text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="https://elitetaxsystems.com/Solution-EliteCopilot">
              <img src={logoSrc} alt="Elite Copilot Logo" className="h-5 w-auto mb-4" /> 
            </a>
            <p className="text-sm">AI-driven video telematics & cloud safety platform for Singapore fleets.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-highlight">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Predictive Collision Alerts</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Driver Fatigue Detection</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Blind Spot Detection</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Driver Coaching</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Incident Reporting</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">On-demand Video</a></li>
              <li><a href="https://elitetaxsystems.com/Solution-EliteCopilot" target="_blank" className="hover:text-highlight transition">Pedesterian Warning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-highlight">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-highlight" />
                <span>22 Sin Ming Lane #02-72
                <br />Singapore 573969</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-highlight" />
                <span>+65 8588 2413</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-highlight" />
                <span>bicheng.gu@elitetaxsystems.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light-teal mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>© 2025 Elitetax Systems. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            <a href="https://elitetaxsystems.com/Privacy-Policy" className="hover:text-highlight transition mr-4">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
