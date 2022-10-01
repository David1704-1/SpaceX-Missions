import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const MISSIONS_QUERY = gql`
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
export const useMissionsQuery = () => {
  return useQuery(MISSIONS_QUERY)
}

const getRocketQuery = (id) => gql`
query Rocket {
    rocket(id: "${id}") {
        name
        type
        description
      }
}
`
export const useRocketQuery = (id) => {
  const ROCKET_QUERY = getRocketQuery(id)
  return useQuery(ROCKET_QUERY)
}
