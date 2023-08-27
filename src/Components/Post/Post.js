import styles from './Post.module.css'

import { db } from "../../firebase-config"
import { useState } from 'react';



const Post = ({post, handleDelete}) => {
  return (
    <div className={styles.postMainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>{post.title}</div>
        <div className={styles.deleteButtonContainer} onClick={() => handleDelete(post.id)}>x</div>
      </div>
      <div className={styles.bodyContainer}>{post.body}</div>
      <div className={styles.authorContainer}>~{post.author.name}</div>
    </div>
  )
}

export default Post