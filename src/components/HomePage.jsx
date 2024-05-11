import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    const fetchAllUser = (e) => {
        fetch('http://ec2-3-110-177-187.ap-south-1.compute.amazonaws.com/get-all-user',{credentials: 'include'}).then(json=>json.json()).then(data=>console.log(data)).catch(err=>console.log(err))
    }

    const logout = (e) => {
        fetch('http://ec2-3-110-177-187.ap-south-1.compute.amazonaws.com/logout',{credentials: 'include'}).then(json=>json.json()).then(data=>{
            navigate('/')
        }).catch(err=>console.log(err))
    }
  return (
    <div>
        <button className='btn btn-success' onClick={fetchAllUser}>Fetch All User</button>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )
}
