import React, { useMemo, useState } from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Section from '../components/Section'
import RoadmapCard from '../components/cards/RoadmapCard'

const dataset = [
  { title: 'DSA Mastery', description: 'Arrays, Trees, Graphs, DP', progress: 45 },
  { title: 'Frontend Web', description: 'HTML, CSS, JS, React, Next.js', progress: 30 },
  { title: 'Backend Web', description: 'APIs, DB, Auth, Deployment', progress: 15 },
  { title: 'Machine Learning', description: 'Math, ML, DL basics', progress: 10 },
  { title: 'Data Analyst', description: 'SQL, Pandas, Viz', progress: 22 },
]

export default function Roadmaps() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => dataset.filter(d => d.title.toLowerCase().includes(q.toLowerCase())), [q])

  return (
    <GradientBG>
      <Navbar />
      <Section title="Roadmaps" subtitle="Clear paths to mastery" actions={(
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="h-10 w-56 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
      )}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <RoadmapCard key={r.title} {...r} />
          ))}
        </div>
      </Section>
    </GradientBG>
  )
}
