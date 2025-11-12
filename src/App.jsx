import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Roadmaps from './pages/Roadmaps'
import MockInterviews from './pages/MockInterviews'
import Resume from './pages/Resume'
import Notes from './pages/Notes'
import Problems from './pages/Problems'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/mock-interviews" element={<MockInterviews />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>
    </Layout>
  )
}

export default App
