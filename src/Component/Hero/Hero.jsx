import React from 'react'
import './Hero.css'
import banner from '../../assets/banner.jpg'
const Hero = () => {
  return (
   <div className='hero-sec'>
   <div className='container'>
   <div className='row'>
   <div className='col-md-6 hero-title'>
   <div className='hero-right'>
   <div className='hero-content'>
     <div className='hero-tag'> 
     <p className='tag-one'> Ray GymNation Club </p> 
     <p className='tag-two'> Sweat , Smile <br/> And Repeat </p>
      <p className='tag-three'> Check out most effective exercise for yoy </p>
      <button className='btn-one'>Explore</button>
     </div>
     <div> <p className='exc'> Exericises </p> </div>
   </div>
   </div>
   </div>
   <div className='col-md-6'>
   <div className='hero-left'>
     <img src={banner} alt='banner' />
   </div>
   </div>
   </div>
   </div>
   </div>
  )
}

export default Hero
