import './CurrentVideoInfo.scss'
import views from '../../assets/images/views.svg'
import likes from '../../assets/images/likes.svg'


function CurrentVideoInfo ({selectedVid}) {
 
    let date = new Date(selectedVid.timestamp);
    const dateMath = date.getMonth() + 1 +'/'+date.getDate() + '/' + date.getFullYear();
     
    return (
        <main className="CurrentVideo">
            <h1 className="CurrentVideo__header">{selectedVid.title}</h1>
            <section className="CurrentVideo__info">
                <h3 className="CurrentVideo__author">By {selectedVid.channel}</h3>
                <div className="CurrentVideo__date">{dateMath}</div>
                <div className="CurrentVideo__views"><img className='CurrentVideo__icon' src={views} alt="viewsIcon"></img>{selectedVid.views}</div>
                <div className="CurrentVideo__likes"><img className='CurrentVideo__icon' src={likes} alt="likesIcon"></img>{selectedVid.likes}</div>
                
            </section>
            <p  className="CurrentVideo__desc">{selectedVid.description}</p>
           
        </main>
    )
}

export default CurrentVideoInfo;