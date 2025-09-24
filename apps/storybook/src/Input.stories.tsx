// apps/storybook/src/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@ckittipob/cpx/react-input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}
export default meta

export const Basic: StoryObj<typeof Input> = {
  args: { placeholder: 'Email' },
}
