import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure Vite resolves workspace packages via PNPM
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@ckittipob/cpx/react-button',
      '@ckittipob/cpx/react-input',
    ]

    const aliasArray = [
      {
        find: '@ckittipob/cpx/theme',
        replacement: fileURLToPath(new URL('../../../packages/theme/index.css', import.meta.url)),
      },
      {
        find: '@ckittipob/cpx/utils',
        replacement: fileURLToPath(new URL('../../../packages/utils/dist/index.js', import.meta.url)),
      },
      {
        find: '@ckittipob/cpx/react-button',
        replacement: fileURLToPath(new URL('../../../packages/react-button/dist/index.js', import.meta.url)),
      },
      {
        find: '@ckittipob/cpx/react-input',
        replacement: fileURLToPath(new URL('../../../packages/react-input/dist/index.js', import.meta.url)),
      },
    ]

    config.resolve = config.resolve || {}
    config.resolve.alias = Array.isArray(config.resolve.alias)
      ? [...config.resolve.alias, ...aliasArray]
      : [...(Object.entries(config.resolve.alias || {}).map(([find, replacement]) => ({ find, replacement })) as any), ...aliasArray]

    return config
  },
}

export default config


