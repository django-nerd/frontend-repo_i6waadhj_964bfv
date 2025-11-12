import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rocket, Map, NotebookPen, FileText, ClipboardList, Workflow } from 'lucide-react'

const NavItem = ({ to, icon: Icon, label }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link to={to} className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white">
      <Icon size={18} />
      <span>{label}</span>
      <span className={`absolute inset-0 -z-10 rounded-full transition-all duration-300 ${active ? 'bg-white/10 shadow-[0_0_30px_rgba(56,189,248,0.35)]' : 'bg-transparent group-hover:bg-white/5'}`} />
    </Link>
  )
}

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 mx-auto w-full max-w-6xl">
      <div className="mx-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-white">
            <Rocket className="text-cyan-400" />
            <span className="font-semibold">NovaPlace</span>
          </Link>
          <nav className="hidden gap-1 md:flex">
            <NavItem to="/" icon={Rocket} label="Home" />
            <NavItem to="/roadmaps" icon={Map} label="Roadmaps" />
            <NavItem to="/mock-interviews" icon={NotebookPen} label="Mock" />
            <NavItem to="/resume" icon={FileText} label="Resume" />
            <NavItem to="/notes" icon={ClipboardList} label="Notes" />
            <NavItem to="/problems" icon={Workflow} label="Problems" />
          </nav>
        </div>
      </div>
    </div>
  )
}
