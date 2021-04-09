const Button = ({ children, type = 'button', ...props }) => (
  <button type={type} {...props}>{children}</button>
)

export default Button
