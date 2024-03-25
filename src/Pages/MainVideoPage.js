import { useEffect, useState } from "react";
import './MainVideoPage.scss'
import CurrentVideo from '../Components/CurrentVideo/CurrentVideo'
import CurrentVideoInfo from "../Components/CurrentVideoInfo/CurrentVideoInfo";
import Comments from '../Components/Comment/Comments'
import NextVideos from '../Components/NextVideos/NextVideos'
import { useParams } from "react-router-dom";
import axios from "axios"

function MainVideoPage() {

    const { idFromParams } = useParams()
    const [Videos, setVideos] = useState([]);
    const [selectedVid, setSelectedVid] = useState([])
    const baseURL = `http://localhost:8080/videos/`

    let defaultVideoId = null

    if (Videos.length > 0) {
        defaultVideoId = Videos[0].id
    }

    let idToDisplay = (idFromParams ?? defaultVideoId)


    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await axios.get(`${baseURL}`)
                setVideos(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getVideos();
    }, [])

    useEffect(() => {
        if (idToDisplay) {
            const getVidDetails = async () => {
                const response = await axios.get(`${baseURL}${idToDisplay}`)
                setSelectedVid(response.data)
            }
            getVidDetails()
        }
    }, [idToDisplay])


    const filteredVids = Videos.filter((video) => video.id !== idToDisplay)

    return (
        <>
            <CurrentVideo selectedVid={selectedVid} />
            <main className='Content'>
                <section className="Content__Container-center">
                    <CurrentVideoInfo selectedVid={selectedVid} />
                    <Comments selectedVid={selectedVid} />
                </section>
                <section className="Content__Container-side">
                    <NextVideos filteredVids={filteredVids} />
                </section>
            </main>
        </>
    );
}

export default MainVideoPage;