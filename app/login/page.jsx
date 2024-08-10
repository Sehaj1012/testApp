"use client"
import { useState } from 'react'
import React from 'react'
import { findUser } from "@/data/findUser"
const Login = () => {
    const [ UserName, setUserName] = useState();
    const [password, setPassword] = useState();

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await findUser({UserName, password});
    }

  return (
        <form onSubmit={onSubmit} className='flex gap-6 flex-col items-start p-3'>
            <input type="username" className='border-black border-2 rounded p-3 w-1/6'  placeholder='username' onChange={onChangeUserName}/>
            <input type="password" className='border-black border-2 rounded p-3  w-1/6'placeholder='password' onChange={onChangePassword} />
            <button type='submit' className='bg-gray-500 p-2 rounded'>Login</button>
        </form>
  )
}

export default Login