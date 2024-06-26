import React from 'react'

const Card = ({title,data}) => {
  return (
    <div className='bg-white shadow-md sm:w-96 p-4 rounded'>
     <h1 className='text-bold'>{title}</h1>
     <p className='mt-4 '>{data}</p>
    </div>
  )
}

export default Card
