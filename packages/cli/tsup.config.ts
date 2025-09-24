import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    cli: 'src/cli/index.ts',
    index: 'src/index.ts',
    'adapters/react/button': 'src/adapters/react/button.ts',
    'adapters/react/input': 'src/adapters/react/input.ts',
  },
  dts: true,
  format: ['esm'],
  clean: true,
  sourcemap: true,
  minify: true,
  external: ['react', 'react-dom', /^@ckittipob\/cpx\//],
})
