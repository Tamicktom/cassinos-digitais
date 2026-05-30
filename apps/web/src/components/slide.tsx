//* Libraries imports
import React from "react"
import { Slide as SlidePrimitive } from "@revealjs/react"
import { cva, type VariantProps } from "class-variance-authority"

//* Utils imports
import { cn } from "@workspace/ui/lib/utils"

const slideBoxVariants = cva(
  "relative flex h-[50svh] flex-col items-center justify-center overflow-hidden rounded-lg border bg-transparent p-4",
  {
    variants: {
      height: {
        default: "h-[50svh]",
        full: "h-full",
      },
    },
    defaultVariants: {
      height: "default",
    },
  }
)

export interface SlideProps extends VariantProps<typeof slideBoxVariants> {
  children: React.ReactNode
  className?: string
}

export function Slide(props: SlideProps) {
  return (
    <SlidePrimitive>
      <div
        className={cn(
          slideBoxVariants({ height: props.height }),
          props.className
        )}
      >
        <div className="absolute inset-0 size-full bg-background/95 backdrop-blur-md" />
        <div className="relative z-10 w-full text-foreground">
          {props.children}
        </div>
      </div>
    </SlidePrimitive>
  )
}
