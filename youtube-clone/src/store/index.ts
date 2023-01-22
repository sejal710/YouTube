import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { InitialState } from "../Types";


const InitialState:InitialState = {
  videos:[],
  currentPlaying:null,
  serachTerm : '',
 searchResult:[],
  nextPageToken : null,
 reccomendedVideos:[]
}

const YoutubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;