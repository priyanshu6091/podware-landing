/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7E5FFF',
        teal: '#00E5C4',
        dark: {
          100: '#2A2A2A',
          200: '#1E1E1E', 
          300: '#171717',
          400: '#121212'
        },
        white: '#FFFFFF',
        gray: {
          400: '#9CA3AF',
          500: '#6B7280',
          800: '#1F2937',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
