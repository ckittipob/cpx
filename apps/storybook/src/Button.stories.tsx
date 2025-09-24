import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '@ckittipob/cpx/react-button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Save', variant: 'primary' },
}


