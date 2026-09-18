/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Pure Creamy Palette
        cream: {
          50: '#F6F1E9',   // Primary App Canvas Background
          100: '#EFE7DA',  // Muted card / panel surface
          150: '#E8DEC9',  // Input fill / border
          200: '#DFD4BD',  // Card Borders & Dividers
          300: '#CFBF9F',  // Active state border
          400: '#B8A480',  // Muted border / secondary element
          500: '#948060',  // Icon / subtle text
          600: '#6E5C44',  // Secondary body text
          700: '#4D3E2D',  // Body text
          800: '#34291D',  // Strong text / Dark headings
          900: '#231B12',  // Deep Espresso text
          950: '#140E0A',  // Max contrast text
        },
        warmCard: {
          DEFAULT: '#FFFDF8',
          elevated: '#FAF5EA',
          border: '#E6DEC8',
          borderHover: '#B58A43',
        },
        // Warm Coffee & Bronze Accents (Pure Cream Aesthetic)
        accent: {
          50: '#FBF7EE',
          100: '#F5EBD4',
          200: '#EAD5A7',
          300: '#DCBC79',
          400: '#CAA050',
          500: '#B58A43',  // Primary Warm Bronze Accent
          600: '#966E31',
          700: '#755225',
          800: '#573C1C',
          900: '#3D2813',
        },
        brand: {
          50: '#FAF5EB',
          100: '#EFE5D2',
          200: '#DEC9A4',
          300: '#CAA771',
          400: '#B58A43',  // Warm Bronze Gold
          500: '#3E3128',  // Rich Espresso Coffee
          600: '#2E231C',
          700: '#241B15',
          800: '#1A120D',
          900: '#100A07',
        },
        terracotta: {
          50: '#FBF7EE',
          100: '#F5EBD4',
          200: '#EAD5A7',
          300: '#DCBC79',
          400: '#CAA050',
          500: '#B58A43',  // Mapping terracotta to warm bronze gold for backwards compatibility
          600: '#966E31',
          700: '#755225',
          800: '#573C1C',
          900: '#3D2813',
        },
        risk: {
          low: '#3B7048',       // Warm Forest Sage
          medium: '#C4841D',    // Warm Ochre Amber
          high: '#B33939',      // Warm Carmine Red (Alerts only)
          critical: '#992D2D',  // Deep Red Alert
        }
      },
      boxShadow: {
        'glow-warm': '0 4px 20px -2px rgba(181, 138, 67, 0.20)',
        'glow-bronze': '0 4px 20px -2px rgba(150, 110, 49, 0.22)',
        'glow-amber': '0 4px 20px -2px rgba(196, 132, 29, 0.20)',
        'glow-rose': '0 4px 20px -2px rgba(179, 57, 57, 0.20)',
        'cream-card': '0 8px 24px -4px rgba(62, 49, 40, 0.05), 0 2px 6px -1px rgba(62, 49, 40, 0.03)',
        'cream-hover': '0 14px 30px -6px rgba(62, 49, 40, 0.10), 0 4px 10px -2px rgba(181, 138, 67, 0.12)',
        'glass': '0 10px 30px 0 rgba(50, 38, 25, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

