import React from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Section from '../components/Section'
import InterviewCard from '../components/cards/InterviewCard'
import Button from '../components/ui/Button'

const interviews = [
  { name: 'Alex Rivera', role: 'SWE @ Stellar', date: 'Dec 12, 5:00 PM', status: 'Upcoming' },
  { name: 'Priya Patel', role: 'SWE @ Aurora', date: 'Dec 2, 2:30 PM', status: 'Completed' },
  { name: 'Ken Ishikawa', role: 'SWE @ Nebula', date: 'Nov 28, 11:00 AM', status: 'Upcoming' },
]

export default function MockInterviews() {
  return (
    <GradientBG>
      <Navbar />
      <Section title="Mock Interviews" subtitle="Schedule and track">
        <div className="mb-6 flex items-center gap-3">
          <Button>Schedule New</Button>
          <Button variant="outline">View Calendar</Button>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((i) => (
            <InterviewCard key={i.name + i.date} {...i} />
          ))}
        </div>
      </Section>
    </GradientBG>
  )
}
