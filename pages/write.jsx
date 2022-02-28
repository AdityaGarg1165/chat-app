import next from 'next';
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import cookie from 'js-cookie'
import axios from 'axios';



function Write() {
  const [value,setvalue] = useState(null)
  const addvalue = async () => {

    const name = cookie.get("username")
    
    const { data } = axios.post(
      'http://192.168.29.254:1337/api/messages',
      {
        data:{message: value,name:name},
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MDQyNDU2LCJleHAiOjE2NDg2MzQ0NTZ9.Q5y_1V5EDfUwTcx8JLEnmlc8Jg3LJ2HaVD09rG_xsOw',
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