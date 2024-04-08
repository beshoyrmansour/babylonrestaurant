import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Reem Kufi"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

