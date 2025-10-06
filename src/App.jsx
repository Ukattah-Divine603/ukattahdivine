import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Aside from './components/Aside'
import Home from './components/Home'

function App() {
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
