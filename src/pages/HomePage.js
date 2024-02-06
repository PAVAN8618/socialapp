
import React, { useState } from 'react'
import PostCard from '../components/PostCard'

function HomePage() {
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      {posts.map((post,index)=>(
        post?(<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ):(
        <>
        <h1>Hi Pawan</h1>
        <h1>Hi Pawan</h1></>
        )
      ))}
    </section>
  )
}

export default HomePage