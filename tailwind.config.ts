import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      tangerine: ['Tangerine', 'serif'],
      italianno: ['Italianno', 'serif'],
      charm: ['Charm', 'cursive'],
      galada: ['Galada', 'cursive'],
      unifrakturMaguntia: ['UnifrakturMaguntia', 'cursive'],
      petitFormalScript: ['Petit Formal Script', 'cursive'],
      meddon: ['Meddon', 'serif'],
      reemKufi: ['Reem Kufi', 'serif'],
      forum: ['Forum', 'serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

