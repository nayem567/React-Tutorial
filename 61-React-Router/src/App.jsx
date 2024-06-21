import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

// * 19 June, 2024
// 60 - useParams - Dynamic Routing

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:title" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
