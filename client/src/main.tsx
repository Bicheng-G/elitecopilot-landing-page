import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeAnalytics } from "./lib/analytics";

// Initialize analytics tracking for UTM parameters and Google Tag Manager
initializeAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
