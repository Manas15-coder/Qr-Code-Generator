import React from 'react'
import '../App.css'
import Banner from '../components/Banner'
import Learn from '../components/Learn'
import Qr from '../components/Qr'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Banner/>
    <Learn/>
    <Qr/>
    <Footer/>
    </>
  )
}

export default Home