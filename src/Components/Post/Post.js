import styles from './Post.module.css'

const Post = ({title, body}) => {
  return (
    <div className={styles.postMainContainer}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.bodyContainer}>{body}</div>
    </div>
  )
}

export default Post