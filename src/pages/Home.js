import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase-config'
import Post from "../Components/Post/Post";
import { useEffect, useState } from "react";

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
      }
      getPosts();
    }, [])

  return (
    <>
      {posts ? 
        posts.forEach((post) => {
          return(
            <Post />
          )
        })
        : <p>There are no posts yet.</p>
      }
    </>
  )
}

export default Home