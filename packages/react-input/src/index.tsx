import * as React from 'react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@ckittipob/cpx/utils'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  asChild?: boolean
}

export const Input = React.forwardRef<ElementRef<'input'>, InputProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'input'
    return <Comp ref={ref} className={cn('input py-[120px]', className)} {...props} />
  },
)

Input.displayName = 'Input'

export default Input
