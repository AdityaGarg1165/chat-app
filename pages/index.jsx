import React, { useEffect,useState } from 'react'
import styles from '../styles/Home.module.css'
import cookie from 'js-cookie'

export default function Home() {
  const [data,setData] = useState(null)
  const name  = cookie.get("username")
  useEffect(()=>{
    const fetchData = async () => {
    const res = await fetch("https://192.168.29.254/api/messages")
    const json = await res.json()
    const jsondata = await json['data']
    setData(jsondata)
    
    }
    fetchData()
    
  })
  return (
    <div className={styles.container}>
      {data && data.map((item,index)=>(
    <div className={styles.messagecontainer} id="mc" key={index}>
        <div>
          <p className={styles.name}>from @{item.attributes.name}</p>
          <h6 className={styles.message}>{item.attributes.message}</h6>
          <h1 className={styles.likes}>👍</h1>
        </div>
    </div>
      ))}
    </div>
  )
}
