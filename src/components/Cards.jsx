import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <>
    <div className='w-full py-[10rem] px-4 bg-white '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col my-20 rounded-lg hover:scale-105 duration-300' >
        <img className='w-20 mx-auto mt-[-3rem] bg-white 'src={single} alt='/'></img>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>  
          <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>  
          <p className='py-2 border-b mx-8 mt-8'>Send upto 2 GB</p>  
        </div>
        <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
        
      </div>
      <div className='w-full shadow-xl flex flex-col my-20 rounded-lg hover:scale-105 duration-300' >
        <img className='w-20 mx-auto mt-[-3rem] bg-white 'src={single} alt='/'></img>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>  
          <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>  
          <p className='py-2 border-b mx-8 mt-8'>Send upto 2 GB</p>  
        </div>
        <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
        
      </div>
      <div className='w-full shadow-xl flex flex-col my-20 rounded-lg hover:scale-105 duration-300' >
        <img className='w-20 mx-auto mt-[-3rem] bg-white 'src={single} alt='/'></img>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>  
          <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>  
          <p className='py-2 border-b mx-8 mt-8'>Send upto 2 GB</p>  
        </div>
        <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
        
      </div></div>  
      
     
      </div>

    </>
    
  )
}

export default Cards