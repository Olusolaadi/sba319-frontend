import React, { useState } from 'react';
import axios from 'axios';


// Signup Component
export function Signup() {
  const [signupForm, setSignupForm] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/signup', signupForm);
      alert('Signup successful!');
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'An error occurred';
      setError(errorMessage);
    }
  };

  return (
    <div className="auth_container">
      <form className="auth_form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={signupForm.name}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
          value={signupForm.username}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={signupForm.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={signupForm.password}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

// Login Component
export function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/login', formData);
      alert('Login Successful!');
    } catch (err) {
      setError(err.response.data.error);
    }

  };

  return (
    <div className="auth_container2">
      <form className="auth_form2" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        /> on
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Home Component
export default function Home() {
  return (
    <div>
      <h1>My Authentication Page.</h1>
      <Signup /> 
      <Login />
    </div>
  );
}