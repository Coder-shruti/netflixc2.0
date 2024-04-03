import React from 'react'

const Header = () => {
  return (
 <div className=' absolute z-10 flex  w-full items-center justify-between  px-6 bg-gradient-to-b from-black '>
     <img className='w-56' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png'/>
    <div className='flex '>
        <h1 className='flex items-center'>shruti mernstack</h1>
        <div className='ml-4'>
        <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search movie</button>
     </div>
    </div>
 </div>
  )
}

export default Header
