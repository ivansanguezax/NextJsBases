'use client'

import {useRouter} from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <button
          className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        mt-4
        py-2
        px-4
        rounded
      " onClick={
        () => {
          alert('Hello');
          router.push('/');
        }
      }
        >
          Click
        </button>
    </section>
  );
}

export default page;