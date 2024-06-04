import React from "react";
import ReactDOM from "react-dom/client";

import DotPattern from "./components/magicui/DotPattern";
import { cn } from "./lib/utils.ts";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(circle_at_top_center,white,transparent_75%)]"
          )}
        />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
