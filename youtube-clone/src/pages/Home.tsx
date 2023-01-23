import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Slidbar from '../components/Slidbar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducer/getHomePageVideos';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.yotubeApp.videos)
  useEffect(() => {
    dispatch(getHomePageVideos(false))
  },[dispatch])
  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height:'7.5vh'}}>
       <Navbar />
      </div>
      <div className='flex' style={{height:'92.5vh'}}>
        <Slidbar />
      </div>
    </div>
  )
}
