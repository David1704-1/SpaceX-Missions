import React from 'react'
import styles from '../styles/Home.module.css'

const Rocket = (props)=>{
    return (
        <div className={styles.grid}>
            <div className={styles.card}>
                <h2>{props.rocket.name}</h2>
                <p>Type: {props.rocket.type}</p>
                <p>Description: {props.rocket.description}</p>
            </div>      
        </div>
    )
}
export default Rocket