// need to make the containers an <a> element. need to have the key assigned. 
import './NextVideos.scss'
import { Link } from 'react-router-dom';

function NextVideos({ filteredVids }) {

    return (

        <section className="NextVideos">
            <div className='NextVideos__header'>next videos</div>
            {filteredVids.map((vid) => {
                return (
                    <div className='NextVideos__container'>
                        <div key={vid.id}>
                            <Link to={`/video/${vid.id}`}><img className="NextVideos__image" src={vid.image} alt={vid.title} /></Link>
                        </div>
                        <section className='NextVideos__info-container'><div className='NextVidoes__title'>{vid.title}</div>
                            <div className='NextVideos__author'>{vid.channel}</div></section>
                    </div>
                )
            })}
        </section>
    )
}

export default NextVideos;