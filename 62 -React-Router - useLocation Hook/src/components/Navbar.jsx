// import React from 'react';
// import {Link, NavLink} from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <nav>
//         <NavLink to='/' className='nav-link'>Home</NavLink> <br/>
//         <NavLink to='/about' className='nav-link'>About</NavLink>  <br/>
//         <NavLink to='blogs' className='nav-link'>Blogs</NavLink>
//         <NavLink to='/contact' className='nav-link'>Contact</NavLink> 
//     </nav>
//   )
// }

// export default Navbar

import { NavLink } from "react-router-dom";

const Navbar = () =>{

  return(
    <nav>
      <NavLink to='/' className='nav-link'>Home</NavLink>
      <NavLink to='/about' className='nav-link'>About</NavLink>
      <NavLink to='/blogs' className='nav-link'>Blogs</NavLink>
      <NavLink to='/contact' className='nav-link'>Contact</NavLink>
    </nav>
  )

}

export default Navbar;