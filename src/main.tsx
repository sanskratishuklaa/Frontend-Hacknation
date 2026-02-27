import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const defaultTheme = "sunset";
document.documentElement.setAttribute("data-theme", defaultTheme);
localStorage.setItem("nova-theme", defaultTheme);

createRoot(document.getElementById("root")!).render(<App />);
