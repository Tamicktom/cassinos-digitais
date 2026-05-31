//* Libraries imports
import { useMemo } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"

export interface MathFormulaProps {
  children: string
  display?: boolean
  className?: string
}

/**
 * @description Componente para exibir fórmulas matemáticas usando KaTeX
 */

export function MathFormula(props: MathFormulaProps) {
  const html = useMemo(() => {
    return katex.renderToString(props.children, {
      displayMode: props.display ?? true,
      throwOnError: false,
    })
  }, [props.children, props.display])

  if (props.display ?? true) {
    return (
      <div
        className={props.className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <span
      className={props.className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
