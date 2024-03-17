import { useEffect, useState } from "react";
import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";
import './CurrentVideo.scss'
import axios from "axios";



function CurrentVideo ({videoIdDisplay}) {
    const apiKey = "?api_key=ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/`
    const [selectedVid, setSelectedVid] = useState(null)

    useEffect (() => {
        if (videoIdDisplay) {
            const getVidDetails = async () => {
                const response = await axios.get(`${baseURL}${videoIdDisplay}${apiKey}`)
                setSelectedVid(response.data)
                console.log(response.data)
            }
            getVidDetails()
        }
    }, [videoIdDisplay])

    if (!selectedVid) {
        return (
            <p> Loading. Please Wait</p>
        )
    }
    
    
    

    return (
        <>
        <div className="CurrentVideo__video-Container"><video className="CurrentVideo__video" controls poster={selectedVid.image}><source src={selectedVid.video}/></video></div>
        <CurrentVideoInfo videoIdDisplay={videoIdDisplay} />
        </>
    )
}

export default CurrentVideo;