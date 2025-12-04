import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "@ui5/webcomponents-fiori",
      "@ui5/webcomponents-base"
    ]
  }
})