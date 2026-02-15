// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#eeeeee', // beige
          light: '#ffffff',
          dark: '#cccccc',
        },
        primary: {
          DEFAULT: '#ec9a0c', // ambre
          light: '#ebab3c',
          dark: '#a86e09',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
}