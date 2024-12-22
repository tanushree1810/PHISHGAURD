import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const onChangeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const url =
        currentState === 'Sign Up'
          ? `${backendUrl}/api/user/register`
          : `${backendUrl}/api/user/login`;

      const { data } = await axios.post(url, credentials);

      if (data.success) {
        toast.success(`${currentState} successful!`);
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        toast.error(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-14 gap-4 pb-40 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-4 mt-10">
        <p className="font-bold text-3xl text-red-600">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-red-600" />
      </div>

      {currentState === 'Sign Up' && (
        <input
          onChange={onChangeHandler}
          name="name"
          value={credentials.name}
          type="text"
          className="w-full px-3 py-2 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Name"
          required
        />
      )}

      <input
        name="email"
        onChange={onChangeHandler}
        value={credentials.email}
        type="email"
        className="w-full px-3 py-2 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder="Email"
        required
      />

      <input
        name="password"
        onChange={onChangeHandler}
        value={credentials.password}
        type="password"
        className="w-full px-3 py-2 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-red-600">Forgot your password?</p>
        <p
          onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          className="cursor-pointer text-red-600"
        >
          {currentState === 'Login' ? 'Create an account' : 'Already have an account? Login'}
        </p>
      </div>

      <button
        onClick={onSubmitHandler}
        className="bg-red-600 text-white font-light px-8 py-2 mt-4 hover:bg-red-700"
      >
        {currentState}
      </button>
    </div>
  );
};

export default Login;
