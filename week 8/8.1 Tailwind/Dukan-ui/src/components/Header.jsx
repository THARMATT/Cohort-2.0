import React from 'react'

const Header = () => {
  return (
    <div className='bg-white  shadow-sm p-2 flex items-center  '>
<h1 className='ml-10 font-bold'>Payments</h1>
<p className='ml-14 text-sm font-semibold'>How it works?</p>
      <input type="text"  placeholder='search' className='p-2 w-80 ml-14 rounded outline-none border-none bg-gray-100'/>
      <div className="icon bg-gray-100 rounded-full p-2 ml-96 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
      <div className="icon bg-gray-100 rounded-full p-2 ml-6 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
</div>
    </div>
  )
}

export default Header
