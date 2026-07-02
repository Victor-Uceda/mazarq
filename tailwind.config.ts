import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        matte: "#050505",
        coal: "#111113",
        graphite: "#1a1b1f",
        acid: "#b7ff38",
        ember: "#ff6a2a",
        surgical: "#f5f7f2"
      },
      boxShadow: {
        neon: "0 0 42px rgba(183,255,56,0.18)",
        ember: "0 0 40px rgba(255,106,42,0.16)"
      },
      backgroundImage: {
        "radial-burn":
          "radial-gradient(circle at 20% 10%, rgba(183,255,56,0.12), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,106,42,0.12), transparent 24%)"
      }
    }
  },
  plugins: []
};

export default config;
