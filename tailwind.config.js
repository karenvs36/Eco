const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lato: ['Lato'],
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
        customGreen: '#1A940F',
        customDark: '#232E26',
        customSand: '#F2EBDE',
      }),
    },
  },
  plugins: [],
};