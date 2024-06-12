import { useState } from 'react'


import './App.css'
import Counter from './components/OnewayBinding'
import InputField from './components/Binding'
// import TwoWayBindingExample from './components/Binding'
// import OneWayBindingExample from './components/Binding'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

   <Counter/>
   <InputField/>
   {/* <TwoWayBindingExample/>
   <OneWayBindingExample/> */}
   {/* <OneWayBindingExample/> */}
   </>
  )
}

export default App
