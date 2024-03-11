// need to make the thumbnails an <a> element. need to have the key assigned. 
import './NextVideos.scss'

function NextVideos ({Videos, selectVid}) {
    
    return(
        
        <section className="NextVideos">
            <div className='NextVideos__header'>next videos</div> 
           {Videos.map((video) => {
                return (
                <div className='NextVideos__container'>
                    <div onClick={() => selectVid(video.id)} key={video.id}>
                       <img className="NextVideos__image" src={video.image}></img></div>
                        <section className='NextVideos__info-container'><div className='NextVidoes__title'>{video.title}</div>
                        <div className='NextVideos__author'>{video.channel}</div></section>
                </div>
                )
            })}
            
        </section>
    )
}

export default NextVideos;