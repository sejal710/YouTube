import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const  getHomePageVideos = createAsyncThunk(
    "youtubeApp/homePageVideos",
    async(isNext:boolean,{getState}) => {
        const{
            yotubeApp: {nextPageToken : nextPageTokenFromState,videos}
        } = getState() as RootState;
        const {data:{items,nextPageToken}} = await axios.get(`${YOUTUBE_API_URL}/search?maxResult=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=videos`);
        // console.log(items)
        const parsedData = await parseDate(items)
    }
    );

