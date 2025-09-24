import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.stories.@(tsx|mdx)'], // <— Storybook will request /src/<...>.stories.tsx
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    // Resolve local workspace packages explicitly and bundle them
    config.resolve = {
      ...(config.resolve || {}),
      alias: [
        {
          find: '@ckittipob/cpx/react-input',
          replacement: '/Users/ckittipob/Projects/cpx-react-ui/poc/npm/packages/react-input',
        },
        {
          find: '@ckittipob/cpx/react-button',
          replacement: '/Users/ckittipob/Projects/cpx-react-ui/poc/npm/packages/react-button',
        },
        { find: '@ckittipob/cpx/utils', replacement: '/Users/ckittipob/Projects/cpx-react-ui/poc/npm/packages/utils' },
        { find: '@ckittipob/cpx/theme', replacement: '/Users/ckittipob/Projects/cpx-react-ui/poc/npm/packages/theme' },
      ],
    }

    config.ssr = {
      ...(config.ssr || {}),
      noExternal: [/^@ckittipob\/cpx\//],
    }
    return config
  },
}
export default config
