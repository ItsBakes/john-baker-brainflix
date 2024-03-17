import { useEffect, useState } from "react";
import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";
import './CurrentVideo.scss'
import axios from "axios";



function CurrentVideo ({selectedVidId}) {
    const apiKey = "?api_key=ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/`
    const [selectedVid, setSelectedVid] = useState(null)

    useEffect (() => {
        if (selectedVidId) {
            const getVidDetails = async () => {
                const response = await axios.get(`${baseURL}${selectedVidId}${apiKey}`)
                setSelectedVid(response.data)
                console.log(response.data)
            }
            getVidDetails()
        }
    }, [selectedVidId])
    
    
    

    return (
        <>
        <div className="CurrentVideo__video-Container"><video className="CurrentVideo__video" controls poster={selectedVid.image}><source src={selectedVid.video}></source></video></div>
        <CurrentVideoInfo selectedVidId={selectedVidId} />
        </>
    )
}

export default CurrentVideo;