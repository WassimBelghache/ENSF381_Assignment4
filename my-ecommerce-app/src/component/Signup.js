import React, { useState } from 'react';

const CustomSignupForm = ({ switchToLogin }) => {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const { usernameInput, passwordInput, confirmPasswordInput, emailInput } = event.target.elements;

    if (!usernameInput.value || !passwordInput.value || !confirmPasswordInput.value || !emailInput.value) {
      setNotification({ message: 'All fields are required.', type: 'error' });
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      setNotification({ message: 'Passwords do not match.', type: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameInput.value,
          password: passwordInput.value,
          email: emailInput.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sign up.');
      }

      setNotification({ message: 'User signed up successfully!', type: 'success' });
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: error.message, type: 'error' });
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      {notification.message && (
        <div style={{ color: notification.type === 'error' ? 'red' : 'green', marginBottom: '10px' }}>
          {notification.message}
        </div>
      )}
      <div>
        <label>
          Username:
          <input name="usernameInput" type="text" placeholder="Username" required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input name="passwordInput" type="password" placeholder="Password" required />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input name="confirmPasswordInput" type="password" placeholder="Confirm Password" required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input name="emailInput" type="email" placeholder="Email" required />
        </label>
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default CustomSignupForm;
