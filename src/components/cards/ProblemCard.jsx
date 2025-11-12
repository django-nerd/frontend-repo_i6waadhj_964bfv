import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const logos = {
  leetcode: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
  hackerrank: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
  codeforces: 'https://sta.codeforces.com/s/19703/images/codeforces-sponsored-by-ton.png'
}

export default function ProblemCard({ title, difficulty = 'Medium', platform = 'leetcode', url }) {
  const diffColor = difficulty === 'Easy' ? 'text-emerald-300' : difficulty === 'Hard' ? 'text-rose-300' : 'text-amber-300'

  return (
    <motion.a href={url} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} className="block rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-medium text-white">{title}</h4>
          <p className={`text-sm ${diffColor}`}>{difficulty}</p>
        </div>
        <img src={logos[platform]} alt={platform} className="h-6 w-auto object-contain" />
      </div>
      <div className="mt-3 inline-flex items-center gap-2 text-cyan-300">
        <span className="text-sm">Open</span>
        <ExternalLink size={16} />
      </div>
    </motion.a>
  )
}
