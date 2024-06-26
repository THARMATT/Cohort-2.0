import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Layout = () => {
  return (
    <div className='grid grid-cols-12 h-screen'>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default Layout
