import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const SignIn = () => {
 const navigate= useNavigate()
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
    const {  username, password } = formData;
  
    const requestData = {
      username,
      password
    };
  const token=localStorage.getItem('authtoken')
    console.log('Submitting form data:', requestData);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      
  };
    axios.post(
      'http://localhost:3000/api/v1/user/signin',
      requestData,
   {   headers:headers}
    )
    .then((response) => {
      console.log('Signup successful:', response);
      setFormData(response)
    
      // Optionally, reset the form after successful submission
      setFormData({
        username: '',
        password: ''
      });
      navigate('/dashboard')
    })
    .catch((error) => {
      console.error('Signup error:', error);
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
