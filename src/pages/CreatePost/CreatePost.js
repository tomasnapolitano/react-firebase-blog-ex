import { useContext } from "react"
import { authContext } from "../../App"
import styles from './CreatePost.module.css'

const CreatePost = () => {
    const { isAuth } = useContext(authContext);

    const handlePublish = () => {
      console.log('giladita');
    }

  return (
    <>{!isAuth ? <p>Log in to create a post!</p> : 
    /* en caso de haber logeado, se muestra la pagina para crear post: */
    <div className={styles.createPostMainContainer}>
      <h1>Create a new Post!</h1>
      <div className={styles.inputGroup}>
        <label>Title</label>
        <input placeholder='Title...'/>
      </div>
      <div className={styles.inputGroup}>
        <label>Body</label>
        <textarea placeholder='Post body...'/>
      </div>
      <button className={styles.postButton} onClick={handlePublish}>Publish</button>
    </div>

    }
    </>
  )
}

export default CreatePost


