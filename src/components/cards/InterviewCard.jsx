import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, Clock } from 'lucide-react'

export default function InterviewCard({ name, role, date, status = 'Upcoming' }) {
  const statusStyles = status === 'Completed'
    ? 'text-emerald-300 bg-emerald-400/10'
    : 'text-amber-300 bg-amber-400/10'
  const StatusIcon = status === 'Completed' ? CheckCircle2 : Clock

  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-white/70">{role}</p>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${statusStyles}`}>
          <StatusIcon size={14} />
          {status}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
        <CalendarDays size={16} />
        {date}
      </div>
    </motion.div>
  )
}
