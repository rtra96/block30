import React, { useState } from 'react';
import './App.css';

const LoginForm = ({setToken}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Login Successful!:', responseData);
        const userToken = responseData.token; setToken(userToken);
        alert('Login Successful!');
    } else {
        console.error('Login failed:', response.statusText);
        alert('Login Failed. Reset your password?');
    }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login to an Existing Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
