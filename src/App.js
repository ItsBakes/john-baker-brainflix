import './App.scss';
import VideoDetails from './data/video-details.json'
import Videos from './data/videos.json';
import Header from './Components/Header/Header';
import CurrentVideo from './Components/CurrentVideo/CurrentVideo'
import { useState } from 'react';
import CommentForm from './Components/CommentForm/CommentForm';
import CurrentVideoInfo from './Components/CurrentVideoInfo/CurrentVideoInfo';
import NextVideos from './Components/NextVideos/NextVideos'
import Comments from './Components/Comment/Comments';

function App() {

  const [videos, setVideos] = useState(Videos);
  

  const [selectedVid, setSelectedVid] = useState(VideoDetails[0])


  const handleSelectVid = (clickedId) => {
    const foundVid = VideoDetails.find((video) => clickedId === video.id)
    setSelectedVid(foundVid)
  }
  const filteredVids = videos.filter((video) => video.id !== selectedVid.id)

  return (
    <>
    <Header/>
    <CurrentVideo selectedVid={selectedVid}/>
    <Comments selectedVid={selectedVid}/>
    <NextVideos Videos={filteredVids} selectVid={handleSelectVid}/>
    </>
  ); 
}

export default App;
