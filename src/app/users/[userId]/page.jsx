'use client'

import {useParams} from "next/navigation";

function UsePage() {

    const params = useParams(); 
    console.log(params);
  return (
    <div>
      

    <button onClick={
        () => {
            alert('Hello');
        }
    }>click</button>
    </div>
  )
}

export default UsePage
