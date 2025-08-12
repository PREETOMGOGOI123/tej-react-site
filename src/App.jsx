import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'

// Pages 
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'

import "../src/index.css"


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router >
  )
}

export default App
