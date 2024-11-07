import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </HelmetProvider>
      
      
    </>
  )
}

export default App
