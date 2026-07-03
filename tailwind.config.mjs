/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E8E5A',   // Emerald
        secondary: '#D4AF37', // Gold
        charcoal: '#333333',
        surface: '#f9f9f9',
        'surface-container-low': '#f3f3f3',
        'surface-dim': '#d9d9d9',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
