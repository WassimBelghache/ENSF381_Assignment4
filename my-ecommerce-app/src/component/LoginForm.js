import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CustomLoginForm = ({ switchToSignup }) => {
  const navigate = useNavigate(); // Instantiate useNavigate


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    if (!username.value || !password.value) {
      alert('Both fields are required.');
      return;
    }

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),})
      
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();})

    
    .then(data => {
      if (data.error) {
        alert(data.error); // Show error message if login fails
      } else {
        console.log('Success:', data);
        // Assuming data.redirect contains the path to navigate to
        navigate(data.redirect || '/homepage'); // Use navigate function with the redirect URL from the response
      }})

    .catch((error) => {
      console.error('Error:', error);
      alert('Login failed: Invalid username or password');
    });};

  return (
    <form onSubmit={handleFormSubmit} name="customLoginForm">
      <div><label>
          Username:
          <input name="username" type="text" placeholder="Username" />
      </label></div>
      <div><label>
          Password:
          <input name="password" type="password" placeholder="Password" />
      </label></div>
      <button type="submit">Login</button>
      </form>
  );};

export default CustomLoginForm;
