
export interface InitialState{
    videos:HomePageVideos[];
    currentPlaying: CurrentPlaying | null ;
    serachTerm:string;
    searchResult:[];
    nextPageToken : string | null;
    reccomendedVideos:RecomendedVideos[];
}

export interface HomePageVideos{}
export interface CurrentPlaying{}
export interface RecomendedVideos{}