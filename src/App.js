import './App.scss';
import videoDetails from './data/video-details.json'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
function App() {


  
  return (
    <>
    <Header/>
    <Hero videoDetails={videoDetails}/>
    </>
  );
}

export default App;
