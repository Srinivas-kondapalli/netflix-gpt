import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className=' w-screen  pt-[25%] px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-sg w-1/4'>{overview}</p>
      <div >
        <button className='bg-white  text-black p-3 px-10  text-xl rounded-lg hover:bg-opacity-80'>▶️Play</button>
        <button className='bg-gray-500 mx-2 text-white p-3 px-12  text-xl bg-opacity-50 rounded-lg hover:bg-opacity-30'>More Info</button>
      </div>
    </div>
  )
}

export default VedioTitle
