import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import RoomTour from '../components/RoomTour'
import Inclusion from '../components/Inclusion'

const LandingPage = () => {
  return (
    <div className='bg-[#FFEEDB] h-screen'>
        <Navbar/>
        <Home/>
        <RoomTour/>
        <Inclusion/>

{/* 
    <h1>Landing Page</h1>
    <Link to='/login'>Login fuckingshit</Link> */}
    </div>
  )
}

export default LandingPage