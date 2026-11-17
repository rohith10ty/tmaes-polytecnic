/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A',       // Color 1: Academic Deep Slate / Navy
          darkMuted: '#334155',  // Readable secondary dark
          darkDeep: '#080C16',   // Deepest contrast
          blue: '#2563EB',       // Color 2: Precision Cobalt / Royal Blue
          blueHover: '#1D4ED8',  // Hover blue
          blueLight: '#EFF6FF',  // Subtle tint
          blueSoft: '#DBEAFE',   // Accent border tint
          surface: '#F8FAFC',    // Minimal backdrop
          surfaceAlt: '#F1F5F9', // Subtle card background
          border: '#E2E8F0',     // Minimal border line
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.1)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
