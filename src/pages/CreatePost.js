import { useContext } from "react"
import { authContext } from "../App"

const CreatePost = () => {

    const { isAuth } = useContext(authContext);
  return (
    <div>{!isAuth ? <p>Log in to create a post!</p> : <div>POST CREATOR</div>}</div>
  )
}

export default CreatePost