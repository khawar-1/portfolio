import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Custom portfolio styles imported BEFORE Tailwind index.css to guarantee
// correct CSS cascade order in both dev (Vite HMR) and production builds.
import "./styles/global.css";
import "./styles/sections.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
