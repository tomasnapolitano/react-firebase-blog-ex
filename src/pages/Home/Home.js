import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase-config'
import Post from "../../Components/Post/Post";
import { useEffect, useState } from "react";
import styles from "./Home.module.css"

// queryResult.forEach((post) => {
  //   console.log(post.data());
  // })
  const postCollection = collection(db,'posts');
  const Home = () => {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const getPosts = async() => {
        const queryResult = await getDocs(postCollection);
        // setPosts(queryResult);
        console.log(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setPosts(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
      getPosts();
    }, [])

  return (
    <div className={styles.homeMainContainer}>
    {posts.map((post) => {
      return <Post key={post.id} title={post.title} body={post.body} authorName={post.author.name}/>
    })}
      
    </div>
  )
}

export default Home