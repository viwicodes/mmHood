import { useRouter } from "next/router"
import Blog from '../../../components/Categories/components/Blog'

function Blogs() {
    const router = useRouter()
    const id = router.query.id
    console.log(id)
  return (
    <Blog/>
  )
}

export default Blogs