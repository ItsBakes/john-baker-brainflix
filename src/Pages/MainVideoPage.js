import { useEffect, useState } from "react";
import CurrentVideo from  '../Components/CurrentVideo/CurrentVideo'
import Comments from  '../Components/Comment/Comments'
import NextVideos from  '../Components/NextVideos/NextVideos'
import { useParams } from "react-router-dom";
import axios from "axios"

function MainVideoPage() {
    
    const {idFromParams} = useParams()
    const [Videos, setVideos] = useState([]);
    const [selectedVid, setSelectedVid] = useState(null)
    // const apiKey = "?api_key=ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `http://localhost:8080/videos/`

    let defaultVideoId = null

    if (Videos.length > 0) {
        defaultVideoId = Videos[0].id
    }

    let idToDisplay = (idFromParams ?? defaultVideoId)

    useEffect(() => {
        async function getVideos() {
            try{
            await axios.get(`${baseURL}`).then((response) => {
                setVideos(response.data)
            })
            } catch (error) {
                console.log(error)
            }
        }
        getVideos();
    },[])  

    useEffect(() => {
        if (idToDisplay) {
            const getVidDetails = async () => {
                const response = await axios.get(`${baseURL}${idToDisplay}`).then((response) => {
                    setSelectedVid(response.data)
                })
                }
            getVidDetails()
        }
    }, [idToDisplay])


    const filteredVids = Videos.filter((video) => video.id !== idToDisplay)

    return (
        <>
            <CurrentVideo selectedVid={selectedVid} />
            <main className='Content'>
                <Comments selectedVid={selectedVid} />
                <NextVideos filteredVids={filteredVids}/>
            </main>
        </>
    );
}

export default MainVideoPage;