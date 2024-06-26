import React from 'react'
const sidebarItems = [
  {
    name: "Home",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 14V9m0 14V9m12 14V9m0 14V9m-5 5l-2-2m2 2l-2-2m0 0l-7 7m9-14h3m0 0v6m-3 0h3" />
      </svg>
    `
  },
  {
    name: "Products",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12h14M5 12l7-7m-7 7l7 7m-7-7h14m0 0l-7-7m7 7l-7 7" />
      </svg>
    `
  },
  {
    name: "Delivery",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m0 0v10a4 4 0 01-4 4H9a4 4 0 01-4-4V10m12 2H3m0 0l2-2m0 0L5 3m14 9v6a2 2 0 002 2h1a2 2 0 002-2v-6m-6 6h-4" />
      </svg>
    `
  },
  {
    name: "Orders",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h3m0 0h3m-3-3v3m0 0v3M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    `
  },
  {
    name: "Settings",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.7 0-1.37.1-2 .29M8 12c0-.7.1-1.37.29-2M12 16c.7 0 1.37-.1 2-.29M16 12c0 .7-.1 1.37-.29 2m0-4A6.97 6.97 0 0012 8c-.7 0-1.37.1-2 .29m-4 .29A7 7 0 1012 19a7 7 0 00-4.71-1.71M12 5v.01M16 7v.01M8 9v.01M7 12h.01M7 16h.01M12 17h.01M17 16h.01M17 12h.01M12 7h.01M16 12h.01M8 12h.01M8 16h.01M12 12h.01" />
      </svg>
    `
  },
  {
    name: "Settings",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.7 0-1.37.1-2 .29M8 12c0-.7.1-1.37.29-2M12 16c.7 0 1.37-.1 2-.29M16 12c0 .7-.1 1.37-.29 2m0-4A6.97 6.97 0 0012 8c-.7 0-1.37.1-2 .29m-4 .29A7 7 0 1012 19a7 7 0 00-4.71-1.71M12 5v.01M16 7v.01M8 9v.01M7 12h.01M7 16h.01M12 17h.01M17 16h.01M17 12h.01M12 7h.01M16 12h.01M8 12h.01M8 16h.01M12 12h.01" />
      </svg>
    `
  },
  {
    name: "Settings",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.7 0-1.37.1-2 .29M8 12c0-.7.1-1.37.29-2M12 16c.7 0 1.37-.1 2-.29M16 12c0 .7-.1 1.37-.29 2m0-4A6.97 6.97 0 0012 8c-.7 0-1.37.1-2 .29m-4 .29A7 7 0 1012 19a7 7 0 00-4.71-1.71M12 5v.01M16 7v.01M8 9v.01M7 12h.01M7 16h.01M12 17h.01M17 16h.01M17 12h.01M12 7h.01M16 12h.01M8 12h.01M8 16h.01M12 12h.01" />
      </svg>
    `
  },
  {
    name: "Settings",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.7 0-1.37.1-2 .29M8 12c0-.7.1-1.37.29-2M12 16c.7 0 1.37-.1 2-.29M16 12c0 .7-.1 1.37-.29 2m0-4A6.97 6.97 0 0012 8c-.7 0-1.37.1-2 .29m-4 .29A7 7 0 1012 19a7 7 0 00-4.71-1.71M12 5v.01M16 7v.01M8 9v.01M7 12h.01M7 16h.01M12 17h.01M17 16h.01M17 12h.01M12 7h.01M16 12h.01M8 12h.01M8 16h.01M12 12h.01" />
      </svg>
    `
  },
  {
    name: "Settings",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.7 0-1.37.1-2 .29M8 12c0-.7.1-1.37.29-2M12 16c.7 0 1.37-.1 2-.29M16 12c0 .7-.1 1.37-.29 2m0-4A6.97 6.97 0 0012 8c-.7 0-1.37.1-2 .29m-4 .29A7 7 0 1012 19a7 7 0 00-4.71-1.71M12 5v.01M16 7v.01M8 9v.01M7 12h.01M7 16h.01M12 17h.01M17 16h.01M17 12h.01M12 7h.01M16 12h.01M8 12h.01M8 16h.01M12 12h.01" />
      </svg>
    `
  },
];

const Sidebar = () => {
  return (
    <div className='bg-gray-800   col-span-2 text-white w-full flex flex-col '>
   
   <div className=" flex p-2 gap-2">
<div className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
</div>
<div className="">
  <p className='text-sm'>Nigam </p>
  <p className='text-xs'>Visit store</p>
</div>
<div className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
   </div>
   <div>
    {sidebarItems.map((item,index)=>(
     <div className='flex items-center gap-2 p-2 hover:bg-gray-700' key={index}>
     <div dangerouslySetInnerHTML={{ __html: item.icon }} />
     <div className="text-sm">{item.name}</div>
   </div>
    ))}
   </div>
<div className='bg-slate-500 flex mt-52 rounded p-2  '>
<div className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>
</div>
<div className="mt-2">
  <p className='font-bold text-sm'>Available Credits</p>
  <p className='font-semibold text-xs'>234</p>
</div>
</div>
    </div>
  )
}

export default Sidebar
