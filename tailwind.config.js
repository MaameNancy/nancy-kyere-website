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
        'maroon': '#800020', // Matches your deep maroon brand identity
        'dark-gray': '#333333',
        'cream': '#fefcef',  // Matches your soft cream brand identity
      },
      fontFamily: {
        'serif': ['var(--font-serif)', 'serif'], // Connects to Playfair Display
        'sans': ['var(--font-sans)', 'sans-serif'], // Connects to Inter
      },
      letterSpacing: {
        'widest-editorial': '0.4em',
        'tightest-editorial': '-0.05em',
      },
      animation: {
        'bounce-subtle': 'subtle-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}