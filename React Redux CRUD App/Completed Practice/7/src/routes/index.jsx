import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import ShowBook from "../pages/ShowBook";
import AddBook from "../pages/AddBook";
import ErrorPage from "../pages/ErrorPage";
import EditBook from "../pages/EditBook";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showbooks" element={<ShowBook />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook" element={<EditBook />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
