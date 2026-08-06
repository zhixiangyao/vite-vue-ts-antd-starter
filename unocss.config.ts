import { presetUno } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [presetUno()],
  transformers: [],
  theme: {
    breakpoints: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
})
