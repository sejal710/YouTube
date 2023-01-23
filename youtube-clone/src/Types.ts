
export interface InitialState{
    videos:HomePageVideos[];
    currentPlaying: CurrentPlaying | null ;
    serachTerm:string;
    searchResult:[];
    nextPageToken : string | null;
    reccomendedVideos:RecomendedVideos[];
}

export interface HomePageVideos{
    videoID : string;
    videoTitle : string;
    videoDescription : string;
    videoLiink : string;
    videoDuration : string;
    videoViews : string;
    videoAge : string;
    channelInfo : {
        id : string;
        image : string;
        name : string;
    }
}
export interface CurrentPlaying{}
export interface RecomendedVideos{}