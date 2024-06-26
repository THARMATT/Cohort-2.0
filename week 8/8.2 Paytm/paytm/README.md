# Control Flow


### Step 1: Initialize Vite Project

1. **Install Vite**:
   ```sh
   npm create vite@latest paytm-frontend --template react
   cd paytm-frontend
   npm install
   ```

### Step 2: Setup Tailwind CSS

1. **Install Tailwind CSS**:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure `tailwind.config.js`**:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Add Tailwind to CSS**:
   In `src/index.css`, add the following:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 3: Create Component Folder and Files

1. **Create `src/components` directory**:
   ```sh
   mkdir src/components
   ```

2. **Create component files**:
   ```sh
   touch src/components/Signup.jsx
   touch src/components/Signin.jsx
   touch src/components/Dashboard.jsx
   touch src/components/Home.jsx
   ```

### Step 4: Setup Routing in `App.jsx`

1. **Update `src/App.jsx`**:
   ```jsx
   import React from 'react';
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import Signup from './components/Signup';
   import SignIn from './components/Signin';
   import Dashboard from './components/Dashboard';
   import Home from './components/Home';

   const App = () => {
     return (
       <div>
         <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/signin' element={<SignIn />} />
             <Route path='/dashboard' element={<Dashboard />} />
           </Routes>
         </BrowserRouter>
       </div>
     );
   };

   export default App;
   ```

### Step 5: Create Signup Component Logic

1. **Update `src/components/Signup.jsx`**:
   ```jsx
   import React, { useState } from 'react';
   import axios from 'axios';
   import { useNavigate } from 'react-router-dom';

   const Signup = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
       firstname: '',
       lastname: '',
       username: '',
       password: ''
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const { firstname, lastname, username, password } = formData;

       const requestData = {
         firstname,
         lastname,
         username,
         password
       };

       console.log('Submitting form data:', requestData);

       axios.post(
         'http://localhost:3000/api/v1/user/signup',
         requestData
       )
       .then((response) => {
         console.log('Signup successful:', response);
         localStorage.setItem('authtoken', response.data.token);
         setFormData({
           firstname: '',
           lastname: '',
           username: '',
           password: ''
         });
         navigate('/signin');
       })
       .catch((error) => {
         console.error('Signup error:', error);
       });
     };

     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
           <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label htmlFor="firstname" className="block text-gray-700 mb-2">First Name</label>
               <input
                 type="text"
                 id="firstname"
                 name="firstname"
                 value={formData.firstname}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="lastname" className="block text-gray-700 mb-2">Last Name</label>
               <input
                 type="text"
                 id="lastname"
                 name="lastname"
                 value={formData.lastname}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <button
               type="submit"
               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
             >
               Sign Up
             </button>
           </form>
         </div>
       </div>
     );
   };

   export default Signup;
   ```

### Step 6: Create SignIn Component Logic

1. **Update `src/components/Signin.jsx`**:
   ```jsx
   import React, { useState } from 'react';
   import { useNavigate } from 'react-router-dom';
   import axios from 'axios';

   const SignIn = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
       username: '',
       password: ''
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const { username, password } = formData;

       const requestData = {
         username,
         password
       };

       const token = localStorage.getItem('authtoken');
       const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       };

       axios.post(
         'http://localhost:3000/api/v1/user/signin',
         requestData,
         { headers: headers }
       )
       .then((response) => {
         console.log('Signin successful:', response);
         localStorage.setItem('authtoken', response.data.token);
         setFormData({
           username: '',
           password: ''
         });
         navigate('/dashboard');
       })
       .catch((error) => {
         console.error('Signin error:', error);
       });
     };

     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
           <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <div className="mb-4">
               <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
             <button
               type="submit"
               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
             >
               Sign In
             </button>
           </form>
         </div>
       </div>
     );
   };

   export default SignIn;
   ```

### Step 7: Create Dashboard and User Component Logic

1. **Update `src/components/Dashboard.jsx`**:
   ```jsx
import React from 'react'
import { Users } from './Users'

const Dashboard = () => {
  return (
    <div className='p-4 m-2'>
   <Users/>
    </div>
  )
}

export default Dashboard

   ```
```jsx
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
export const Users = () => {
    // Replace with backend call
    const[searchInput,setSearchInput]=useState('')
    const [users, setUsers] = useState([{
        firstname: "Harkirat",
        lastname: "Singh",
        _id: 1
    }]);
   const getdata= async function (){
        const response= await axios.get(   `http://localhost:3000/api/v1/user/bulk?filter=${searchInput}`);
        console.log(response.data.user);
        setUsers(response.data.user)
        }
 useEffect(()=>{
    getdata()
 },[])
    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" onInput={getdata} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
        </div>
        <div>
            {users.map((user,index) => <User user={user} key={index} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div> 
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300">Send Money</button>
        </div>
    </div>
}
```