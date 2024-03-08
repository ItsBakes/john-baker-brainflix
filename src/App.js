import './App.scss';
import VideoDetails from './data/video-details.json'
import Videos from './data/videos.json';
import Header from './Components/Header/Header';
import CurrentVideo from './Components/CurrentVideo/CurrentVideo'
import { useState } from 'react';
import CurrentVideoInfo from './Components/CurrentVideoInfo/CurrentVideoInfo';
import NextVideos from './Components/NextVideos/NextVideos'

function App() {

    // need a function to handle switching the videos
    // find the correct video
    // update the selected video state
    // filter the current selected vid out of the array

    // this state will be for thumbnails in next video 
  const [videos, setVideos] = useState(Videos);
  
    // this state will be for the selected video, details, and comments -> CurrentVideo
  const [selectedVid, setSelectedVid] = useState(VideoDetails[0])


  const handleSelectVid = (clickedId) => {
    console.log(clickedId);
    const foundVid = VideoDetails.find((video) => clickedId === video.id)
    console.log(foundVid);
    setSelectedVid(foundVid)
  }
  const filteredVids = videos.filter((video) => video.id !== selectedVid.id)
  console.log(filteredVids)

  return (
    <>
    <Header/>
    <CurrentVideo selectedVid={selectedVid}/>
    {/* <NextVideos Videos={filteredVids} selectVid={handleSelectVid}/> */}
    </>
  ); 
}

export default App;
