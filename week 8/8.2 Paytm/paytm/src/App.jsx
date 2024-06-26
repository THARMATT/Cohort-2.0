import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './components/Signup'
import SignIn from './components/Signin'
import Dashboard from './components/Dashboard'
import Home from './components/Home';

const App = () => {
  return (
    <div >
     <BrowserRouter>
     <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/signup' element={<Signup/>}/> 
    <Route path='/signin' element={<SignIn/>}/> 
    <Route path='/dashboard' element={<Dashboard/>}/> 
   
     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App
