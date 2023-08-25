import { useContext, useState } from "react"
import { authContext } from "../../App"
import styles from './CreatePost.module.css'
import { addDoc, collection } from 'firebase/firestore'
import { db,auth } from "../../firebase-config"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const { isAuth } = useContext(authContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const postsCollection = collection(db,'posts');
    const navigate = useNavigate();

    const handlePublish = async () => {
      await addDoc(postsCollection,{
        // title: title,
        // body: body, <-- esta forma es equivalente a:
        title,
        body,
        author:{
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        }
      })
      navigate('/');
    }
    // const handlePublish =  () => {
    
    //   console.log(auth);
    // }

  return (
    <>{!isAuth ? <p>Log in to create a post!</p> : 
    /* en caso de haber logeado, se muestra la pagina para crear post: */
    <div className={styles.createPostMainContainer}>
      <h1>Create a new Post!</h1>
      <div className={styles.inputGroup}>
        <label>Title</label>
        <input onChange={(event) => {setTitle(event.target.value)}}/>
      </div>
      <div className={styles.inputGroup}>
        <label>Body</label>
        <textarea maxlength="2000" onChange={(event) => {setBody(event.target.value)}}/>
      </div>
      <button className={styles.postButton} onClick={handlePublish}>Publish</button>
    </div>

    }
    </>
  )
}

export default CreatePost


