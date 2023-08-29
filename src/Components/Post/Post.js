import styles from './Post.module.css'

import { auth, db } from "../../firebase-config"
import { useContext } from 'react';
import { authContext } from '../../App';


const Post = ({post, handleDelete}) => {
  const { isAuth } = useContext(authContext);

  return (
    <div className={styles.postMainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>{post.title}</div>
        { isAuth && (post.author.id === auth.currentUser.uid) ?
          <div className={styles.deleteButtonContainer} onClick={() => handleDelete(post.id)}>x</div>
          :
          null
        }
      </div>
      <div className={styles.bodyContainer}>{post.body}</div>
      <div className={styles.authorContainer}>~{post.author.name}</div>
    </div>
  )
}

export default Post