import Link from "next/link"
import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <Link href="./"><h1>NextJs Curso</h1></Link>
        <ul>
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
        </ul>
      </nav>
  )
}

export default Navbar
