import PostCard from "../../components/PostCard";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
//   await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
}

async function page() {
  const posts = await loadPost();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default page;
