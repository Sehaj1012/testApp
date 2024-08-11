"use client"
import { useState } from 'react'
import React from 'react'
import { findUser } from "@/data/findUser"

const Login = () => {
    const [ UserName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [welcomeMessage, setWelcomeMessage] = useState();

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        setError(null);
        setWelcomeMessage(null);
        e.preventDefault();
        const user = await findUser({UserName, password});

        if (!user) {
            setError('Invalid credentials');
            return;
        }
        console.log(user);
        setWelcomeMessage(`Welcome ${user}`);
    }

  return (
    <div>
        <form onSubmit={onSubmit} className='flex gap-6 flex-col items-start p-3'>
            <input type="username" className='border-black border-2 rounded p-3 w-1/6'  placeholder='username' onChange={onChangeUserName}/>
            <input type="password" className='border-black border-2 rounded p-3  w-1/6'placeholder='password' onChange={onChangePassword} />
            <button type='submit' className='bg-gray-500 p-2 rounded'>Login</button>
        </form>

        {error && <div className='text-red-500'>{error}</div>}
        {welcomeMessage && <div className='text-green-500 text-xl font-bold '>{welcomeMessage}</div>}
    </div>
  )
}

export default Login