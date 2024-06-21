import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import User from "./pages/User";
import UserQueryRoute from "./pages/UserQueryRoute";

// * 20 June, 2024
// *61 - useLocation - Dynamic Routing

// * 62 - react routing | route parameter, query parameter

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blogs/:title" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/user/" element={<User />} />
          <Route path="/users" element={<UserQueryRoute />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
