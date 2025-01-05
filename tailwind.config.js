/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        white: '#fff',
        dark: '#2a2a2a',
        light: '#fafbfc',
        danger: '#bf0000',
        primary: '#025466',
        success: '#12b669',
        darkGray: '#747474',
      }
    },
  },
  plugins: [],
}

