import Link from "next/link"


function Navbar() {
  return (
    <nav>
        <li>
          <Link href="/">
            home
          </Link>
        </li>
        <li>
          <Link href="/about">
            about
          </Link>
        </li>
        <li>
          <Link href="/store">
            Store
          </Link>
        </li>
        <li>
          <Link href="/post">
            Post
          </Link>
        </li>
      </nav>
  )
}

export default Navbar
