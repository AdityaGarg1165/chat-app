import next from 'next';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import cookie from 'js-cookie'
import axios from 'axios';
import Router from 'next/router'



function Write() {
  const [value,setvalue] = useState(null)
  const addvalue = async () => {

    const name = cookie.get("username")
    useEffect(()=>{
      if (name === undefined||null){
        Router.push("/login")
      }
    },[])
    
    const { data } = axios.post(
      'https://adchat.herokuapp.com/api/messages',
      {
        data:{message: value,name:name,likes:0},
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MTExMjY2LCJleHAiOjE2NDg3MDMyNjZ9.cPhC9UPKR6DHZa3p5jRqqHIXPE_XTUxpPdSwZBYVFXo',
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