import React, { useState } from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Section from '../components/Section'

function Markdown({ value }) {
  // very small placeholder renderer
  const lines = value.split('\n').map((line, i) => {
    if (line.startsWith('# ')) return <h1 key={i} className="mb-2 text-2xl font-bold">{line.slice(2)}</h1>
    if (line.startsWith('## ')) return <h2 key={i} className="mb-2 text-xl font-semibold">{line.slice(3)}</h2>
    return <p key={i} className="mb-2">{line}</p>
  })
  return <div className="prose prose-invert max-w-none">{lines}</div>
}

export default function Notes() {
  const [text, setText] = useState('# My Notes\n- Use markdown here\n- Dark themed editor')

  return (
    <GradientBG>
      <Navbar />
      <Section title="Notes" subtitle="Write and review">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="h-[420px] w-full rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
          <div className="h-[420px] w-full overflow-auto rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
            <Markdown value={text} />
          </div>
        </div>
      </Section>
    </GradientBG>
  )
}
