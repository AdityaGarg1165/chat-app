import React, { useEffect,useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data,setData] = useState(null)
  useEffect(async ()=>{
    const res = await fetch("http://localhost:1337/api/messages")
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
          <h1 className={styles.likes}>👍</h1>
        </div>
    </div>
      ))}
    </div>
  )
}
