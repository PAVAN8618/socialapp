import React, { useState,useEffect,useRef } from 'react'
import { getDocs, collection} from 'firebase/firestore'
import SkeletonCard from '../components/SkeletonCard'
import {db} from '../firebase/config'
import PostCard from '../components/PostCard'
import {useTitle} from '../hooks/useTitle'




function HomePage() {
  const [posts, setPosts] = useState(new Array(4).fill(false));
  const [toggle, setToggle] = useState(false);
  useTitle('Home');
  const postsRef = useRef(collection(db,'posts'))

useEffect(()=>{
  async function getPosts(){
    const data = await getDocs(postsRef.current);
    setPosts(data.docs.map((document)=>(
      {...document.data(), id: document.id}
    )))
    
  }
  getPosts();
},[toggle])
  
  return (
    <section>
      {posts.map((post,index)=>(
        post?(<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ):(
        <SkeletonCard key={index}/>
        )
      ))}
    </section>
  )
}

export default HomePage