import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name: 'books',
    initialState: [
        {
            id: 1,
            title: "HTML",
            author: "Mohaymeul Islam"
        },
        {
            id: 2,
            title: "CSS",
            author: "Nayem"
        }
    ],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload.id)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const existingBook = state.find((b) => b.id === id);
            if (existingBook) {
                existingBook.title = title;
                existingBook.author = author;
            }
        }
    }
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;