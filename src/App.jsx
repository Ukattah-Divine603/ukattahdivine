import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Aside from './components/Aside'
import Home from './components/Home'
import logo from './images/CODEVINE-LOGO-BLACK.png' // replace with your logo path


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2 seconds preloader
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="body-components">
        <Aside />
        <Home />
      </div>
    </>
  )
}

export default App
