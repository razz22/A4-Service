/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/frontend/home/hero.jpeg')",
        "testimonial-bg": "url('/images/frontend/home/wave.png')",
        "qoute-bg": "url('/images/frontend/home/qoute-bg.png')",
        "contact-bg": "url('/images/frontend/home/contact-bg.png')",
      },
    },
  },
  plugins: [],
};
