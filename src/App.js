import './App.scss';
import VideoDetails from './data/video-details.json'
import Videos from './data/videos.json';
import Header from './Components/Header/Header';
import CurrentVideo from './Components/CurrentVideo/CurrentVideo'
import { useState } from 'react';
import NextVideos from './Components/NextVideos/NextVideos'
import Comments from './Components/Comment/Comments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// https://unit-3-project-api-0a5620414506.herokuapp.com/
// "api_key": "ce976863-77d9-4921-9e41-14e53f8217da"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
