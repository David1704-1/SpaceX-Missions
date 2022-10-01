import { useRouter } from 'next/dist/client/router'
import Rocket from '../Components/Rocket'

const RocketInfo = () => {
  const router = useRouter()
  const id = router.query.id
  return <Rocket id={id} />
}

export default RocketInfo
