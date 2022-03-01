import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import cookie from 'js-cookie'
import axios from 'axios';
import Router from 'next/router'



function Write() {
  const [value,setvalue] = useState(null)
  const name = cookie.get("username")
    useEffect(()=>{
      if(name === undefined || null){
        Router.push("/login")
      }
    })
  const addvalue = async () => {

    
    const { data } = axios.post(
      'http://192.168.29.254/api/messages',
      {
        data:{message: value,name:name},
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MDY1NTYzLCJleHAiOjE2NDg2NTc1NjN9.hK19Mn7S9779rhwr4EKtdEqRow6gnjprnKDYvpZcYVg',
        },
      }
    );
}
    
  return (
    <div>
        <input type="text" onChange={(event)=>{setvalue(event.target.value)}} id="inp" />
        
        <Link href="/"><button onClick={addvalue}>Submit</button></Link>
    </div>
  )
}

export default Write