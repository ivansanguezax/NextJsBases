"use client"
import Link from "next/link";
import {useParams} from "next/navigation";

function PostCard({post}) {
  const params = useParams();
  console.log(params);
  return (
    <div className="card bg-white p-3 shadow rounded m-3 transition duration-500 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
      <div key={post.id} className="card-body flex flex-col items-center justify-center text-center">
        <Link href={`/post/${post.id}`}>
          <h3 className="text-2xl font-bold text-gray-700 mb-3 hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            {post.id}. {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-lg mb-3">{post.body}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { alert("hello") }}>click</button>
      </div>
    </div>
  )
}

export default PostCard
