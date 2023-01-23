import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { RecommendedVideos } from "../../Types";
import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

// const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;${API_KEY}

export const getRecommendedVideos = createAsyncThunk(
  "yotubeApp/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState() as RootState;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=AIzaSyBvpfdBygQ4-nLFBjwGMdEo2Q7UgRzG4Ng&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    );

    return { parsedData };
  }
);
