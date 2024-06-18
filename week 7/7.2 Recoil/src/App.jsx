import React, { useState } from 'react'
import { countAtom } from './store/atom/count'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { Evenselector } from './store/atom/selector'

const App = () => {

  return (
    <RecoilRoot>
  
 <div>
  <Parent/>
 </div>

    </RecoilRoot>
  )
}
function Count(){
  const[count,setCount]=useRecoilState(countAtom);
  console.log('cpount');
  function handleCount(){
   setCount(count+1)
  }
  return(<>
   <div> 
    <button onClick={handleCount}>Count{count }</button>
   </div>
  </>)
}

function CountRender(){
  const count=useRecoilValue(countAtom);
 const isEven=useRecoilValue(Evenselector)
  return(<>
  
  <div>{isEven?`${count} is odd`:`${count} is even`}</div></>)
}
function Parent(){
  console.log('parent');
  return(<>
  <div>
    <Count/>
    <CountRender/>
  </div>
  </>)
}

export default App
