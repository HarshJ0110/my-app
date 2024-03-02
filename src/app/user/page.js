"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'



const page = () => {
    const userData = useSelector((data) => (data.usersData.users))
    console.log(userData)
    const dispatch = useDispatch()
    return (
        <div className='display-user'>
            {userData.map((item, index) => (
                <div key={index}>{item.name}<button onClick={() => (dispatch(removeUser(item.id)))}>Remove</button></div>
            ))}
        </div>
    )
}

export default page


