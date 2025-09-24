import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from '@ckittipob/cpx/react-input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}
export default meta

type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: { placeholder: 'Email' },
}


