/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007F70",
        heading: {
          DEFAULT: '#000000', 
        },
        'reading-1': {
          DEFAULT: '#666666',
        },
        info: "#2264FF"
      },
      fontSize: {
        heading1: ['32px', { lineHeight: '40px', fontWeight: '600' }],
        heading2: ['28px', { lineHeight: '36px', fontWeight: '500' }],
        heading3: ['24px', { lineHeight: '32px', fontWeight: '500' }],
        title1: ['20px', { lineHeight: '32px', fontWeight: '500' }],
        title2: ['18px', { lineHeight: '28px', fontWeight: '500' }],
        title3: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        body1: ['16px', { lineHeight: '24px' }],
        body2: ['14px', { lineHeight: '20px' }],
        body3: ['12px', { lineHeight: '16px' }],
      },
      btn: {
        'btn-outline': 'border-neutral hover:bg-neutral/10 hover:border-neutral',
        'btn-primary': 'bg-primary hover:bg-primary/90 text-white border-none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
