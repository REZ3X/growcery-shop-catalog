/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'placeholder': "url('https://www.bu.edu/globalprograms/files/2015/05/banner-placeholder.png')",
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
    animation: {
      jump: "jump 0.5s ease-in-out",
      "jump-loop": "jump 0.9s ease-in-out infinite",
    },
  },
  plugins: [],
};
