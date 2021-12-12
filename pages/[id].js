import client from '../apollo-client'
import gql from 'graphql-tag'
import Rocket from '../Components/Rocket'

const RocketInfo = ({rocket}) => {   
    return (
        <Rocket rocket={rocket}/>
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
export default RocketInfo