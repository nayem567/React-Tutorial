import { createSlice } from "@reduxjs/toolkit";

const bookSliece = createSlice({
    name: 'books',
    initialState:[
        {id: 27, title: 'Book Title 1', author: 'Nayem'},
        {id: 100, title: 'Book Title 2', author: 'Qazi Nayem'}
    ],
    reducers:{
        addBook:(state, action) =>{
            state.push(action.payload);
        },
        deleteBook:(state, action) =>{
            return state.filter((book) => book.id !== action.payload.id);
        },
        editBook:(state, action) =>{
            const {id, title, author} = action.payload; 
            const isBookExist = state.find((book) => book.id === id);
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