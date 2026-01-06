import React from 'react'

interface LocatixLogoProps {
  className?: string
  size?: number
}

export function LocatixLogo({ className = '', size = 40 }: LocatixLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="black"/>
      {/* "L" letter */}
      <path
        d="M12 28V12H16V24H22V28H12Z"
        fill="white"
      />
    </svg>
  )
}