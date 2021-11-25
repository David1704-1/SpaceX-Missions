import client from '../apollo-client'
import gql from 'graphql-tag'
import styles from '../styles/Home.module.css'

const Rocket = ({rocket}) => {   
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
export async function getStaticProps(context){
    const id = context.params.id
    const {data} = await client.query({
        query: gql`
            query Rocket {
                rocket(id: "${id}") {
                    name
                    type
                    description
                  }
            }
        `
    })
    
    return {
        props:{
            rocket: data.rocket
        }
    }
}
export async function getStaticPaths(){
    const {data} = await client.query({
        query: gql`
            query Rockets_id {                
                rockets {
                    id                   
                }
            }
        `
    })
    const paths = data.rockets.map(rocket => {
        return {
            params: { id: rocket.id }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export default Rocket
