import React from 'react'
import { useRocketQuery } from '../graphql'
import styles from '../styles/Home.module.css'

const Rocket = ({ id }) => {
  const { data, error, loading } = useRocketQuery(id)
  if (loading) return <h1>Fetching rocket data...</h1>
  if (error) return error.message
  const { rocket } = data
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>{rocket.name}</h2>
        <p>Type: {rocket.type}</p>
        <p>Description: {rocket.description}</p>
      </div>
    </div>
  )
}
export default Rocket
