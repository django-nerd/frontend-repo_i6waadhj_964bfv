import React from 'react'
import GradientBG from '../components/GradientBG'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import RoadmapCard from '../components/cards/RoadmapCard'
import InterviewCard from '../components/cards/InterviewCard'
import ProblemCard from '../components/cards/ProblemCard'

const roadmaps = [
  { title: 'DSA Mastery', description: 'Foundations to advanced problem solving', progress: 45 },
  { title: 'Web Development', description: 'Frontend, backend, and cloud basics', progress: 20 },
  { title: 'Machine Learning', description: 'Math, sklearn, and deep learning intro', progress: 10 },
]

const interviews = [
  { name: 'Alex Rivera', role: 'SWE @ Stellar', date: 'Dec 12, 5:00 PM', status: 'Upcoming' },
  { name: 'Priya Patel', role: 'SWE @ Aurora', date: 'Dec 2, 2:30 PM', status: 'Completed' },
]

const problems = [
  { title: 'Two Sum', difficulty: 'Easy', platform: 'leetcode', url: 'https://leetcode.com/problems/two-sum/' },
  { title: 'Median of Two Sorted Arrays', difficulty: 'Hard', platform: 'leetcode', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
  { title: 'Sherlock and Anagrams', difficulty: 'Medium', platform: 'hackerrank', url: 'https://www.hackerrank.com/challenges/sherlock-and-anagrams' },
]

export default function Home() {
  return (
    <GradientBG>
      <Navbar />
      <Hero />

      <Section title="Quick Roadmaps" subtitle="Pick up where you left off">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((r) => (
            <RoadmapCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section title="Upcoming & Recent Interviews" subtitle="Stay on track">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {interviews.map((i) => (
            <InterviewCard key={i.name} {...i} />
          ))}
        </div>
      </Section>

      <Section title="Hot Problems" subtitle="Sharpen your skills">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <ProblemCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </GradientBG>
  )
}
