import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#06080f]" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
        >
          Ace Your Placements with a Futuristic Prep Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance text-white/80"
        >
          Roadmaps, mock interviews, resume insights, curated problem sets — all in one sleek, fast dashboard.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg">Start Learning</Button>
          <Button size="lg" variant="secondary">Explore Roadmaps</Button>
        </motion.div>
      </div>
    </section>
  )
}
