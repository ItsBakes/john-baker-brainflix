import { useEffect, useState } from "react";
import Header from  '../Components/Header/Header'
import CurrentVideo from  '../Components/CurrentVideo/CurrentVideo'
import Comments from  '../Components/Comment/Comments'
import NextVideos from  '../Components/NextVideos/NextVideos'
import { useParams } from "react-router-dom";
import axios from "axios"
// import Videos from '../data/videos.json'
// import VideoDetails from '../data/video-details.json'
// "api_key": "ce976863-77d9-4921-9e41-14e53f8217da"

function MainVideoPage() {
    
    const {idFromParams} = useParams()
    const [Videos, setVideos] = useState([]);
    const [selectedVid, setSelectedVid] = useState()
    const apiKey = "?api_key=ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/`

    let defaultVideoId = null

    if (Videos.length > 0) {
        defaultVideoId = Videos[0].id
    }

    let videoIdDisplay = idFromParams ?? defaultVideoId;

    
    const handleSelectVid = (clickedId) => {
        const foundVid = Videos.find((video) => clickedId === video.id)
        setSelectedVid(foundVid)
    }
    const filteredVids = Videos.filter((video) => video.id !== videoIdDisplay)

    useEffect(() => {
        async function getVideos() {
            const response = await axios.get(`${baseURL}${apiKey}`)// need backticks for string interpolation
            setVideos(response.data)
            console.log(response.data)
        }
        getVideos();
    },[])
    return (
        <>
            <Header />
            <CurrentVideo videoIdDisplay={videoIdDisplay} />
            <main className='Content'>
                <Comments videoIdDisplay={videoIdDisplay} />
                <NextVideos filteredVids={filteredVids} selectVid={handleSelectVid}/>
            </main>
        </>
    );
}

export default MainVideoPage;