import '../src/styles/app.css'
import type { Preview } from '@storybook/react'

// Optional: dark mode toggle via class
const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    // layout: 'centered',
  },
  globals: {
    // you can add a toolbar to toggle dark later and set documentElement.classList
  },
}

export default preview
