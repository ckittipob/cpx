import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { cn } from '@ckittipob/cpx/utils'

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean
  variant?: 'primary' | 'default'
}

export const Button = React.forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ asChild = false, variant = 'default', className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn('btn', variant === 'primary' && 'btn-primary', className)} {...props} />
  },
)

Button.displayName = 'Button'

export default Button
