import React, { useState } from 'react'

function ShowHide() {
    const [show, setShow] = useState(false)


  return (
    <div className=' flex items-center justify-center flex-col h-screen'>
        {
            show && <h1 className='text-2xl mb-5'>Click Button to show & hide text.</h1>
        }
    <div className='flex justify-center items-center gap-x-4'>
        <button onClick={()=> setShow(true)} className='bg-black text-white px-4 py-1 rounded-md'>Show Text</button>
        <button onClick={()=> setShow(false)} className='bg-black text-white px-4 py-1 rounded-md'> Hide Text</button>
    </div>

    </div>
  )
}

export default ShowHide