import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = createAsyncThunk('posts/fetchData', async() =>{
    const res = await axios.get(url);
    return res.data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchData.pending, (state) =>{
            state.isLoading = true
        });
        builder.addCase(fetchData.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.posts = action.payload
        });
        builder.addCase(fetchData.rejected, (state, action) =>{
            state.error = action.error.message
        })
    } 
});

export default postSlice.reducer;