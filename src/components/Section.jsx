import React from 'react'

export default function Section({ title, subtitle, children, actions }) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-white/70">{subtitle}</p>
          )}
        </div>
        {actions}
      </div>
      {children}
    </section>
  )
}
