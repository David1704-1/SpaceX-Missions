import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from '../apollo-client'
import gql from 'graphql-tag'
import Missions from '../Components/Missions'

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
            <Missions missions={missions}/>
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