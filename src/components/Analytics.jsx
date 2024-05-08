import React from 'react'
import analysis from '../assets/analysis.jpg'
const Analytics = () => {
  return (
    <>
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <img className='w-[500px] mx-auto my-4 'src={analysis} alt='/'/>
         <div className=' flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus tenetur esse iste labore, tempore officiis modi, debitis aliquid voluptate sequi, eligendi dolore tempora! Eius, eveniet nulla? Iusto dolore magnam nemo?</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-100px py-3'> Get Started</button>
         </div>
        
        </div>
      </div>
    </>
  
  )
}

export default Analytics