import './CurrentVideoInfo.scss'
import views from '../../assets/images/views.svg'
import likes from '../../assets/images/likes.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

function CurrentVideoInfo ({selectedVidId}) {
    const apiKey = "ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/`
    const [VidInfo, setVidInfo] = useState([])

    useEffect (() => {
        if (selectedVidId) {
            const getVidInfo = async () => {
                const response = await axios.get(`${baseURL}${selectedVidId}${apiKey}`)
                setVidInfo(response.data)
                console.log(response.data)
            }
            getVidInfo()
        }
    }, [selectedVidId])

    let date = new Date(VidInfo.timestamp);
    const dateMath = date.getMonth() + 1 +'/'+date.getDate() + '/' + date.getFullYear();
    return (
        <main className="CurrentVideo">
            <h1 className="CurrentVideo__header">{VidInfo.title}</h1>
            <section className="CurrentVideo__info">
                <h3 className="CurrentVideo__author">By {VidInfo.channel}</h3>
                <div className="CurrentVideo__date">{dateMath}</div>
                <div className="CurrentVideo__views"><img className='CurrentVideo__icon' src={views} alt="viewsIcon"></img>{VidInfo.views}</div>
                <div className="CurrentVideo__likes"><img className='CurrentVideo__icon' src={likes} alt="likesIcon"></img>{VidInfo.likes}</div>
                
            </section>
            <p  className="CurrentVideo__desc">{VidInfo.description}</p>
           
        </main>
    )
}

export default CurrentVideoInfo;