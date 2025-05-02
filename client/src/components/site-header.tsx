// import { Logo } from "@/components/ui/logo"; // Removed component import
import logoSrc from "@/components/ui/logo.svg"; // Import the SVG file as a source (assuming rename)


export function SiteHeader() {

  return (
    <header className="bg-teal text-white">
      <div className="container mt-2 mx-auto px-4 py-3 flex justify-between items-center">
        {/* Use img tag with imported src */}
        <a href="https://elitetaxsystems.com/Solution-EliteCopilot">
          <img src={logoSrc} alt="Elite Copilot Logo" className="h-7 lg:h-8 w-auto" /> 
        </a>
        {/* You might need to adjust height/width classes (e.g., h-8) */}
      </div>
    </header>
  );
}
