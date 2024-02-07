/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        OffWhite: "hsl(36, 100%, 99%)",
        GrayishBlue: "hsl(233, 8%, 79%)",
        DarkgrayishBlue: "hsl(236, 13%, 42%)",
        VerydarkBlue: "hsl(240, 100%, 5%)",
        SoftOrange: "hsl(35, 77%, 62%)",
        SoftRed: "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
