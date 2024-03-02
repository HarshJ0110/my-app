"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';
import Link from 'next/link';

const AddUsers = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch()
    const userDispatch = () => {
        setName("");
        dispatch(addUser(name))
    }
  return (

    <div className='add-user'>
        <h3>User List</h3>
        <input 
            type="text" 
            placeholder='Add New User'
            value={name}
            onChange={(e)=>(setName(e.target.value))}
        >
        </input>
        <button onClick={userDispatch}>Add User</button>
        <Link href="/user">User List</Link>
    </div>
  )
}

export default AddUsers