import { Link } from "react-router-dom"


export const Navbar = () =>{
  return(
    <nav>
      <Link to='/' className="nav-link">Home</Link>
      <Link to='/view-books' className="nav-link">View Books</Link>
      <Link to='/add-book' className="nav-link">Add Book</Link>
    </nav>
  )
};

