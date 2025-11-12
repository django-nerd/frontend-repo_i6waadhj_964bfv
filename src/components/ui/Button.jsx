import React from 'react'
import { cn } from '../../lib/utils'

export function Button({ className = '', variant = 'primary', size = 'md', glow = true, children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:ring-offset-0 disabled:opacity-60 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/5'
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  }
  return (
    <button
      className={cn(
        base,
        variants[variant],
        sizes[size],
        glow && 'shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:shadow-[0_0_26px_rgba(59,130,246,0.45)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
