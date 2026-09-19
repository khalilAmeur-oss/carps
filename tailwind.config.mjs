/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          blue: '#0066B3',
          gray: '#6B7280',
          dark: '#1E293B',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'md': '8px',
      }
    },
  },
  plugins: [],
}
