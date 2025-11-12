import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Target } from 'lucide-react'

export default function RoadmapCard({ title, description, progress = 0 }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{
        boxShadow: '0 0 60px rgba(56,189,248,0.25)'
      }} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
        </div>
        <Target className="text-cyan-300" />
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-4 flex items-center gap-2 text-cyan-300">
        <span className="text-sm">Continue</span>
        <ArrowRight size={16} />
      </div>
    </motion.div>
  )
}
