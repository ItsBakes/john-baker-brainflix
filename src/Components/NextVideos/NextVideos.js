// need to make the thumbnails an <a> element. need to have the key assigned. 
import './NextVideos.scss'

function NextVideos ({filteredVids, selectVid}) {

    
    
    return(
        
        <section className="NextVideos">
            <div className='NextVideos__header'>next videos</div> 
           {filteredVids.map((vid) => {
                return (
                <div className='NextVideos__container'>
                    <div onClick={() => selectVid(vid.id)} key={vid.id}>
                       <img className="NextVideos__image" src={vid.image}></img></div>
                        <section className='NextVideos__info-container'><div className='NextVidoes__title'>{vid.title}</div>
                        <div className='NextVideos__author'>{vid.channel}</div></section>
                </div>
                )
            })}
        </section>
    )
}

export default NextVideos;