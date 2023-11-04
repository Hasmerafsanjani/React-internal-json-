import React from 'react'

function Quotes({text,author}) {

  return (
    <>
    <div className='mt-20 m-5 bg-'>
      <div className=' bg-cyan-300  p-3 rounded-2xl m-4'>
        <h3 className='text-3xl font-bold  p-3'>{text}</h3>
        <p className='text-end p-2 text-xl  font-semibold text-blue-600'> ✍️~ {author} </p>
      </div>
    </div>
    </>
  )
}

export default Quotes