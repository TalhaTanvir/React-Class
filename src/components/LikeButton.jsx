import React, { useState } from 'react'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";


function LikeButton() {
    const [like, setLike] = useState()

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <h1>{like}</h1>
        <div className=' flex gap-x-4 mt-20'>
        <button onClick={()=> setLike(<BiSolidLike className='text-green-700 text-9xl' />)} className='bg-green-700 px-6 py-1 rounded-md text-white'>Like</button>
        <button onClick={()=> setLike(<BiSolidDislike className='text-red-700 text-9xl' />)} className='bg-red-700 px-5 py-1 rounded-md text-white'>DisLike</button>
        </div>
        <button onClick={()=> setLike('')} className='bg-black px-5 py-1 rounded-md text-white mt-2'>Reset</button>

    </div>
  )
}

export default LikeButton