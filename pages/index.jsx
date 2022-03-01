import React, { useEffect,useState } from 'react'
import styles from '../styles/Home.module.css'
import cookie from 'js-cookie'
import Router from 'next/router'
export default function Home() {
  const [data,setData] = useState(null)
  const [like,setLike] = useState(0)
  const name = cookie.get("username")
  useEffect(async ()=>{
    if (name === undefined||null){
      Router.push("/login")
    }
    const res = await fetch("https://adchat.herokuapp.com/api/messages")
    const json = await res.json()
    const jsondata = await json['data']
    setData(jsondata)
  })
  return (
    <div className={styles.container}>
      {data && data.map((item,index)=>(
    <div className={styles.messagecontainer} id="mc" key={index}>
        <div>
          <p className={styles.name}>from @{item.attributes.name}</p>
          <h6 className={styles.message}>{item.attributes.message}</h6>

        </div>
    </div>
      ))}
    </div>
  )
}
