import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      reemKufi: ['Reem Kufi', 'serif'],
      forum: ['Forum', 'serif'],
      lugrasimo: ['Lugrasimo', 'serif'],
      unifrakturmaguntia: ['Unifrakturmaguntia', 'serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

