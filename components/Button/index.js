import { forwardRef } from 'react'

const Button = ({ children, type = 'button', ...props }, ref) => (
  <button type={type} ref={ref} {...props}>
    {children}
  </button>
)

export default forwardRef(Button)
