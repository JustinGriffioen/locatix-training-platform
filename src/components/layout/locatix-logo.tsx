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
      {/* Clean black circle background */}
      <circle cx="20" cy="20" r="20" fill="black"/>

      {/* Simple location pin */}
      <g transform="translate(14, 12)">
        {/* Pin shadow/base */}
        <circle cx="6" cy="6" r="5" fill="#333" opacity="0.5"/>
        {/* Main pin */}
        <circle cx="6" cy="6" r="4" fill="white"/>
        {/* Pin point */}
        <path d="M6 10 L4 8 L5 7 L6 8 L7 7 L8 8 Z" fill="white"/>
        {/* Center dot */}
        <circle cx="6" cy="6" r="1" fill="black"/>
      </g>
    </svg>
  )
}