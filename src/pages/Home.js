import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase-config'

const queryResult = await getDocs(collection(db,'posts'));

queryResult.forEach((post) => {
  console.log(post.data());
})
const Home = () => {

  return (
    <div>Home</div>
  )
}

export default Home