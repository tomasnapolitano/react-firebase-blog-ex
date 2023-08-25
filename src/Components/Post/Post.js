import styles from './Post.module.css'

const Post = ({title, body, authorName}) => {
  return (
    <div className={styles.postMainContainer}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.bodyContainer}>{body}</div>
        <div className={styles.authorContainer}>~{authorName}</div>
    </div>
  )
}

export default Post