import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../apollo-client'
import gql from 'graphql-tag'

export default function Home({ missions }) {
    return (
      <div className={styles.container}>
        <Head>
          <title>SpaceX missions</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            SpaceX missions:
          </h1>

          <div className={styles.grid}>     
            {
              missions.map((mission)=>{
                return (
                  <a href={mission.rocket.rocket.id} className={styles.card} key={mission.id}>
                      <h2>{mission.mission_name}</h2>
                      {mission.links.flickr_images.length > 0 && (
                      <Image src={mission.links.flickr_images[0]} width={300} height={300}/>
                      )}
                      <p>Launch date: {mission.launch_date_local}</p>
                      <p>Launch site: {mission.launch_site.site_name}</p>
                  </a>
                )
              })
            }
          </div>
        </main>
      </div>
  )  
  
}

export async function getStaticProps(){
  const {data} = await client.query({
    query: gql`
      query Launches {        
        launchesPast {
          id
          mission_name
          links {
            flickr_images
          }
          rocket {
            rocket {
              id
            }
          }
          launch_date_local
          launch_site {
            site_name
          }
        }        
      }
    `
  })
  return {
    props: {
      missions: data.launchesPast
    }
  }
}