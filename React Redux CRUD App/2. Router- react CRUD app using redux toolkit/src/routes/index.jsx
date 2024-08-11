import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";
import Error from "../pages/Error";
import { Navbar } from "../layouts/Navbar";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-books" element={<BooksView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
