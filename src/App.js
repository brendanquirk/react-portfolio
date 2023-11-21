import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return <Home />
    } else if (currentPage === 'about') {
      return <About />
    } else if (currentPage === 'skills') {
      return <Skills />
    } else {
      return <Work />
    }
  }
  return (
    <div>
      <Navbar handlePageChange={handlePageChange} />
      {renderCurrentPage()}
    </div>
  )
}

export default App
