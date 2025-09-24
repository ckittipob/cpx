import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'schemas/index': 'src/schemas/index.ts',
  },
  dts: true,
  format: ['esm'],
  clean: true,
  sourcemap: true,
  minify: true,
})
