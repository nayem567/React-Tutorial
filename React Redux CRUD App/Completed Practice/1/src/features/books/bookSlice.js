import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: [
        { id: 1, title: 'HTML', author: 'Mohaymenul Islam' },
        { id: 2, title: 'CSS', author: 'Nayem' }
    ],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        deleteBook: (state, action) => {
           return state.filter((book) => book.id !== action.payload.id);
        },
        editBook: (state, action) =>{
            const {id, title, author} = action.payload;
            const isBookExist = state.find((book) => book.id === id);
            if(isBookExist){
                isBookExist.title = title;
                isBookExist.author = author;
            }
        }
    }
});

export const {addBook, deleteBook, editBook} = bookSlice.actions;
export default bookSlice.reducer;
