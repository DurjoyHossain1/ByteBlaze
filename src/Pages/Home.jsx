import React from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner';
import wave from "../assets/wave.svg"

const Home = () => {
  return (
    <div className='relative min-h-[calc(100vh-116px)] flex flex-col items-center justify-center'>
       <Banner/>

       <img className='absolute bottom-0 w-full ' src={wave} alt="" />
    </div>
  )
}

export default Home