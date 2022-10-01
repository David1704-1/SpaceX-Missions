import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Missions from '../Components/Missions'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX missions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SpaceX missions:</h1>

        <div className={styles.grid}>
          <Missions />
        </div>
      </main>
    </div>
  )
}
