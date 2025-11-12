import React, { useMemo, useState } from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Section from '../components/Section'
import ProblemCard from '../components/cards/ProblemCard'

const dataset = [
  { title: 'Two Sum', difficulty: 'Easy', platform: 'leetcode', url: 'https://leetcode.com/problems/two-sum/' },
  { title: '3Sum', difficulty: 'Medium', platform: 'leetcode', url: 'https://leetcode.com/problems/3sum/' },
  { title: 'K Similar Strings', difficulty: 'Hard', platform: 'leetcode', url: 'https://leetcode.com/problems/k-similar-strings/' },
  { title: 'Climbing the Leaderboard', difficulty: 'Medium', platform: 'hackerrank', url: 'https://www.hackerrank.com/challenges/climbing-the-leaderboard' },
  { title: 'Ladder A - Theatre Square', difficulty: 'Easy', platform: 'codeforces', url: 'https://codeforces.com/problemset/problem/1/A' },
]

export default function Problems() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => dataset.filter(d => d.title.toLowerCase().includes(q.toLowerCase())), [q])

  return (
    <GradientBG>
      <Navbar />
      <Section title="Problems" subtitle="Curated by role">
        <div className="mb-6 flex items-center gap-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search problems..." className="h-10 w-64 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProblemCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </GradientBG>
  )
}
