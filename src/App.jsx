import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Aside from './components/Aside'
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Home />

    </>
  )
}

export default App
