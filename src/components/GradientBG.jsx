import React from 'react'

export default function GradientBG({ children }) {
  return (
    <div className="relative min-h-screen bg-[#06080f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      {children}
    </div>
  )
}
