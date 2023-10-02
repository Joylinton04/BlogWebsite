import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <h2>the blog</h2>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/newpost'}>New post</Link></li>
            <li><Link to={'about'}>About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;