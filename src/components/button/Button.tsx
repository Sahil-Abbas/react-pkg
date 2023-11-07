import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

function Button({ children }: ButtonProps) {
  return <div>{children}</div>
}

export default Button
