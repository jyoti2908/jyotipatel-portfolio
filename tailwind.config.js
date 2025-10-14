/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(20%)',
            opacity: '1',
          },
          '80%': {
            transform: 'translateY(-10%)',
          },
          '100%': {
            transform: 'translateY(0)',
             opacity: '1',
          },
        },
         fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2.5s ease-out forwards',
        slideInLeft: 'slideInLeft 2s ease-out forwards',
        bounceFromTop: 'bounceFromTop 2s ease-out forwards',
         fadeInUp: 'fadeInUp 4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
