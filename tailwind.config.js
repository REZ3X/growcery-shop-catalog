/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'placeholder': "url('https://www.bu.edu/globalprograms/files/2015/05/banner-placeholder.png')",
      },
      fontFamily: {
        'Lora': ['Lora', 'serif'],
        'climate_crisis': ['Climate Crisis', 'sans-serif'],
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      screens: {
        tnl: {"max": "768px"},
        pdl: {"max": "426px"},
        ttl: {"max": "376px"},
        tdn: {"max": "321px"},
      },
    },
    animation: {
      jump: "jump 0.5s ease-in-out",
      "jump-loop": "jump 0.9s ease-in-out infinite",
    },
  },
  plugins: [],
};
