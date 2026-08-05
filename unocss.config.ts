import { presetUno, transformerDirectives } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  theme: {
    breakpoints: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
})
