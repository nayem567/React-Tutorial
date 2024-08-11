import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState:[
        {id: 27, title: "HTML", author: "Nayem"},
        {id: 270, title: "CSS", author: "Qazi"},
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
                isBookExist.title = title,
                isBookExist.author = author
            }
        }
    }
});

export const {addBook, deleteBook, editBook} = bookSlice.actions;
export default bookSlice.reducer;





