'use client'
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { axios } from 'axios';

const Login = () => {

    const [user, setUser] = useState({ email: '', password: '', username: '' })
    const onLogin = async () => {

    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center py-2 bg-black">
            <h1>
                Login
            </h1>
         

            <label htmlFor="email">email</label>
            <input className="p-4"
                id='email'
                type='text'
                value={user.email}
                onChange={(e) => setUser({
                    ...user, email: e.target.value
                })}
                placeholder="email"
            />

            <label htmlFor="password">password</label>
            <input className="p-4"
                id='password'
                type='text'
                value={user.password}
                onChange={(e) => setUser({
                    ...user, password: e.target.value
                })}
                placeholder="password"
            />

            <button className='bg-white p-4 m-4' onClick={onLogin}>Login here</button>
            <Link href='/signup' className="text-white"> Visit Signup</Link>
        </div>
    )
}
    

export default Login