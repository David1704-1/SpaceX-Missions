import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMissionsQuery } from '../graphql'

const Missions = () => {
  const { data, error, loading } = useMissionsQuery()
  if (loading) return <h1>Loading missions...</h1>
  if (error) return <h1>{error.message}</h1>
  const { launchesPast: missions } = data

  return missions.map((mission) => (
    <a href={mission.rocket.rocket.id} className={styles.card} key={mission.id}>
      <h2>{mission.mission_name}</h2>
      {mission.links.flickr_images.length > 0 && (
        <Image src={mission.links.flickr_images[0]} width={300} height={300} />
      )}
      <p>Launch date: {mission.launch_date_local}</p>
      <p>Launch site: {mission.launch_site.site_name}</p>
    </a>
  ))
}
export default Missions
