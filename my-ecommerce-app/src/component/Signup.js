/*
=========================================================
Name        : LoginPage.js
Assignment  : Assignment 5
Author(s)   : Svara Patel, Wassim Belghache
Submission  : April 8, 2024
=========================================================
*/

import React, { useState } from 'react';

const SignupForm = ({ switchLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({ message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errorMessage = '';

    if (!formData.username.trim() || !formData.password.trim() || !formData.confirmPassword.trim() || !formData.email.trim()) {
      errorMessage = 'All fields are required!';
    } else if (formData.password !== formData.confirmPassword) {
      errorMessage = 'Passwords do not match!';
    }

    setFormErrors({ message: errorMessage });

    if (!errorMessage) {
      try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          // Assuming the server sends back a message upon successful signup
          setFormErrors({ message: data.message });
        } else if (response.status === 400) {
          const data = await response.json();
          setFormErrors({ message: data.message });
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        setFormErrors({ message: 'An error occurred during signup. Please try again later.' });
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {formErrors.message && <p className="error">{formErrors.message}</p>}
      <form onSubmit={handleSubmit}> 
        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Enter your username" 
          value={formData.username} 
          onChange={handleChange} 
        /><br />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password" 
          value={formData.password} 
          onChange={handleChange} 
        /><br />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          placeholder="Confirm your password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        /><br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your Email" 
          value={formData.email} 
          onChange={handleChange} 
        /><br />
        <button type="submit">Signup</button><br />
      </form>
    </div>
  );
}

export default SignupForm;
