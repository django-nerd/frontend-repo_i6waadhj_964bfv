import React, { useState } from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Upload, FileText } from 'lucide-react'

export default function Resume() {
  const [fileName, setFileName] = useState('')

  return (
    <GradientBG>
      <Navbar />
      <Section title="Resume Analyzer" subtitle="Upload or paste your resume">
        <div className="mx-auto max-w-3xl rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-white shadow-[0_0_40px_rgba(56,189,248,0.1)]">
          <label className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-white transition hover:border-cyan-400/30">
            <Upload className="text-cyan-300" size={26} />
            <span className="text-sm text-white/70">Drag & drop or click to upload</span>
            <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
          </label>
          {fileName && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center gap-2 text-sm text-white/80">
              <FileText size={16} />
              {fileName}
            </motion.div>
          )}
          <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/80">
            <p className="mb-1 font-medium text-cyan-300">AI analysis (placeholder)</p>
            <p>Your resume looks great! We'll soon provide insights on skills, keywords, and suggestions.</p>
          </div>
        </div>
      </Section>
    </GradientBG>
  )
}
