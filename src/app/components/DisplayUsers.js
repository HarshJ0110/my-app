"use client"
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

export const DisplayUsers = () => {
    const userData = useSelector((data)=>(data.usersData.users))
    const dispatch = useDispatch()
    console.log(userData);
  return (
    <div className='display-user'>
        {console.log(userData)}
        {userData && userData.map((item, index)=>(
            <div key={index}>{item.name}<button onClick={()=>(dispatch(removeUser(item.id)))}>Remove</button></div>
        ))}
    </div>
  )
}

