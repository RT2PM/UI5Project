import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@ui5/webcomponents-react"
import { MyApp } from "./MyApp.tsx"
import "./index.css"
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-react/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  </React.StrictMode>
)