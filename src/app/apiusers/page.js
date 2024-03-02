"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice';


const page = () => {

  const dispatch = useDispatch();
  const apiUserData = useSelector((data)=>data.usersData.userAPIData);
  console.log(apiUserData);
  useEffect(()=>{
    dispatch(fetchApiUsers());
  },[])
  return (
    <div>
      <h1>User List from Api</h1>
      {apiUserData.map((item, index)=>(
        <p key={index}>{item.name}</p>
      ))}
    </div>
  )
}

export default page