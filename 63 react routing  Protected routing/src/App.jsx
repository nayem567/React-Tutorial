import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import User from "./pages/User";
import UserQueryRoute from "./pages/UserQueryRoute";
import AddBlog from './pages/AddBlog';
import Protected from "./routes/Protected";


// * 20 June, 2024
// *61 - useLocation - Dynamic Routing

// * 62 - react routing | route parameter, query parameter
// * 63 - Protected Routing

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isLoggedIn ? (<button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>) :
        (<button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>) }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blogs/:title" element={<Blog />}/>

          <Route path="/contact" element={<Contact />}/>
          <Route path="/user/" element={<User />} />
          <Route path="/users" element={<UserQueryRoute />}/>
          <Route path="*" element={<Error404 />}/>
          
          <Route path="/add-blog" element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
