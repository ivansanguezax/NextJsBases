"use client"
import Link from "next/link";

function PostCard({post}) {
  return (
    <div>
        
      <div key={post.id}>
      <Link href={`/post/${post.id}`}> 
          <h3>
            {post.id}. {post.title}
          </h3>
          </Link>
          <p>{post.body}</p>
          <button onClick={()=>{
            alert("hello")
          }}>click</button>
    </div>
    </div>
  )
}

export default PostCard
