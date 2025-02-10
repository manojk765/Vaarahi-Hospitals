import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Cinzel'] , 
        title:['Noto Serif'], 
        description:['Noto Sans'] ,
        contact:['Raleway'],
        nav:['Montserrat'],
        info:['Poppins'],
        bodytext:['"Source Sans 3"', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
      },
    },
  },
  plugins: [],
} satisfies Config;


// Fonts 

// Poppins (Headings) + Source Sans Pro (Body text):

// Poppins: A geometric sans-serif font that’s modern and well-suited for headings on a healthcare website.
// Source Sans Pro: A clean, simple sans-serif font for body text, providing great readability and professionalism.