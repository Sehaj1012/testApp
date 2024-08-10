"use client"
import { useState } from 'react'
import { addUser } from '../../data/adduser'
import React from 'react'

const Register = () => {
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
        await addUser({UserName, password});
    }

  return (
        <form onSubmit={onSubmit} className='flex gap-6 flex-col items-start p-3'>
            <input type="username" className='border-black border-2 rounded p-3 w-1/6'  placeholder='username' onChange={onChangeUserName}/>
            <input type="password" className='border-black border-2 rounded p-3  w-1/6'placeholder='password' onChange={onChangePassword} />
            <button type='submit' className='bg-gray-500 p-2 rounded'>Register</button>
        </form>
  )
}

export default Register;