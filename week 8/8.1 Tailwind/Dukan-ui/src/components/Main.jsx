import React from 'react'
import Header from './Header'
import Card from './Card'
import Order from './Order'

const Main = () => {
  return (
    <div className='col-span-10  bg-white  w-full '>
    
      <Header />
      <div className="flex gap-4 m-2">
      <Card title={'Orders'} data={'23456'}/>
      <Card title={'Orders'} data={'23456'}/>
      <Card title={'Orders'} data={'23456'}/>
      </div>
      <Order/>
    </div>
  )
}

export default Main
