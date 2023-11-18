"use client"
import { useEffect } from "react"

function users() {
    useEffect(() => {
        console.log("hello user")
    } , [])

  return (
    <div>
      heloo user
    </div>
  )
}

export default users
