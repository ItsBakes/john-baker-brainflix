// need to make the thumbnails an <a> element. need to have the key assigned. 
import './NextVideos.scss'

function NextVideos ({Videos, selectVid}) {
    return(
        <section className="NextVideos">
           {Videos.map((video) => {
                return (
                <div>
                    <button onClick={() => selectVid(video.id)} key={video.id}>
                       <img className="NextVideos__image" src={video.image}></img></button>
                        <section><div>{video.title}</div>
                        <div>{video.channel}</div></section>
                </div>
                )
            })}
            
        </section>
    )
}

export default NextVideos;