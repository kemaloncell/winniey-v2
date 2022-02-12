import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  plugins: [
    transform('daisyui'),
  ],
})
