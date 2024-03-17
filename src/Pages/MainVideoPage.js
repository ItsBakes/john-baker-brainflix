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
    const [videos, setVideos] = useState([]);
    const apiKey = "ce976863-77d9-4921-9e41-14e53f8217da"

    let defaultVideoId = null

    if (videos.length > 0) {
        defaultVideoId = videos[0].id
    }

    let videoIdDisplay = idFromParams ?? defaultVideoId;

    
    // const handleSelectVid = (clickedId) => {
    //     const foundVid = VideoDetails.find((video) => clickedId === video.id)
    //     setSelectedVid(foundVid)
    // }
    const filteredVids = videos.filter((video) => video.id !== videoIdDisplay)

    useEffect(() => {
        const getVideos = async () => {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`)// need backticks for string interpolation
            setVideos(response.data)
            console.log(response.data)
        }
        getVideos();
    },[])
    return (
        <>
            <Header />
            <CurrentVideo selectedVideoId={videoIdDisplay} />
            <main className='Content'>
                <Comments selectedVideoId={videoIdDisplay} />
                <NextVideos Videos={filteredVids} selectedVideoId={videoIdDisplay} />
            </main>
        </>
    );
}

export default MainVideoPage;