import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo :null,
        popularMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
    }
})
export const {addNowPlayingMovies,addTrailerVedio,addPopularMovies}= moviesSlice.actions
export default moviesSlice.reducer