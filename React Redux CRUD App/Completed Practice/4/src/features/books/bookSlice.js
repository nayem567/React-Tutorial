import { createSlice } from "@reduxjs/toolkit";

const bookSliece = createSlice({
    name: 'books',
    initialState:[
        {id: 1, title: 'Book Title 1', author: 'Nayem'},
        {id: 2, title: 'Book Title 2', author: 'Qazi Nayem'}
    ],
    reducers:{
        addBook:(state, action) =>{
            state.push(action.payload);
        },
        deleteBook:(state, action) =>{
            const filteredBooks = state.filter((book) => book.id !== action.payload.id);
            return filteredBooks;
        },
        editBook:(state, action) =>{
            const {id, title, author} = action.payload;
            const isBookExist = state.find((book) => book.id === action.payload.id);
            if(isBookExist){
                isBookExist.id = id;
                isBookExist.title = title;
                isBookExist.author = author;
            }
        }
    }
});

export const {addBook, deleteBook, editBook} = bookSliece.actions;
export default bookSliece.reducer;