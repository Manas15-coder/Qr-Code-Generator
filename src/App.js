import React from 'react'
import Home from './pages/Home.jsx'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'

const App = () => {
  return (
    <>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
