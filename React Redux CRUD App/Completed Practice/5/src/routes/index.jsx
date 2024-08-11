import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShowBook from '../pages/ShowBook'
import AddBook from '../pages/AddBook'
import EditBook from '../pages/EditBook'
import ErrorPage from '../pages/ErrorPage'
import Navbar from './Navbar'

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showbook' element={<ShowBook />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/editbook' element={<EditBook />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index