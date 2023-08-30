import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore"
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getPosts = async() => {
        setLoading(true);
        const q = query(postCollection, orderBy('dateOfCreation', 'desc'));
        const queryResult = await getDocs(q);
        // setPosts(queryResult);
        console.log(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setPosts(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      }
      getPosts();
    }, [])

    // TODO: the delete has to check for user. Currently, any user (logged or not) can delete any post.
     const deletePost = async (id) => {
       await deleteDoc(doc(db,"posts",id));
       setPosts(posts.filter(post => post.id !== id));
     } 
     if(!loading){

       return (
         <div className={styles.homeMainContainer}>

            {posts.length > 0 ? (
              posts.map((post) => {
                return <Post key={post.id} post={post} handleDelete={deletePost}/>
              }))
              : (<h1>no posts.</h1>)
              }
                  
                </div>
              )
      }
      else{
        return(
          // <div className={styles.homeMainContainer}>Loading pija</div>
          <img src="/loading_gif.gif"/>
        )
      }
}

export default Home