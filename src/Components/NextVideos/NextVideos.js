// need to make the thumbnails an <a> element. need to have the key assigned. 
import './NextVideos.scss'

function NextVideos (Videos, selectVid) {
    return(
        <ul className="NextVideos">
           {Videos.map((video) => {
                console.log(video)
                return (
                <li>
                    <button onClick={() => selectVid(video.id)} key={video.id}>
                       <img className="NextVideos__image" src={video.image}></img></button>
                        <div>{video.description}</div>
                </li>
                )
            })}
            
        </ul>
    )
}

export default NextVideos;