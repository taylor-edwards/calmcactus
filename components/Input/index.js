import { useEffect, useState } from 'react'
import { cn, noop } from 'utils'
import styles from './input.module.scss'

const Input = ({
  className,
  type = 'text',
  value = '',
  onChange = noop,
  noStyles = false,
  ...props
}) => {
  const [state, setState] = useState(value)
  useEffect(() => setState(value), [value])
  const handleChange = e => {
    const nextValue = (e.currentTarget ?? e.target)?.value ?? value
    setState(nextValue)
    onChange(nextValue)
  }
  return (
    <div className={cn({ [styles.wrapper]: !noStyles }, className)}>
      <input
        className={cn(styles.input, className)}
        type={type}
        value={state}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

/**
 * Use to group inputs together while preserving border effects
 */
export const InputGroup = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

/**
 * Use to add multiple inputs per row (uses flexbox)
 */
export const InputRow = ({ children, className, ...props }) => (
  <div className={cn(styles.wrapper, styles.row, className)} {...props}>
    {children}
  </div>
)

export default Input
