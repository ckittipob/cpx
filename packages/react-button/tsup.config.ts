import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/index.tsx' },
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
})
