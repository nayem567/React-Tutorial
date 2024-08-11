import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name: 'books',
    initialState:[
        {id: 20, title: "Hello", author: "Nayem"},
        {id: 204, title:"World", author: "John"}
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
            const isBookExist = state.find((book) => book.id === action.payload.id);
            if(isBookExist){
                isBookExist.id = id;
                isBookExist.title = title;
                isBookExist.author = author;
            }
        }
    }
});

export const {addBook, deleteBook, editBook} = bookSlice.actions;
export default bookSlice.reducer;