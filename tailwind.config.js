/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        notojp: ['Noto Sans JP', 'sans-serif'],
        ibm: ['IBM Plex Sans Thai', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('../public/images/Hero-Christmas.jpg')",
        'header-ref': "url('../public/images/HB00-009.png')",
        'header-ref-flowdy': "url('../public/images/Header-RefFlowdy.jpg')",
        'header-ref-marvin': "url('../public/images/FB02-004_Banner.png')",
        'header-ref-herman': "url('../public/images/HB03-001_Banner.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}