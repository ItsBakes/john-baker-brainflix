import CommentForm from '../CommentForm/CommentForm'



function CurrentVideoInfo ({selectedVid}) {
let date = new Date(selectedVid.timestamp);
const dateMath = date.getMonth() + 1 +'/'+date.getDate() + '/' + date.getFullYear();

    return (
        <main className="CurrentVideo">
            <h1 className="CurrentVideo__header">{selectedVid.title}</h1>
            <section className="CurrentVideo__info">
                <h2 className="CurrentVideo__author">By {selectedVid.channel}</h2>
                <div className="CurrentVideo__date">{dateMath}</div>
                <img src='../../assets/images/views.svg' alt="viewsIcon"></img><div className="CurrentVideo__views">{selectedVid.views}</div>
                <img src='../../assets/images/likes.svg' alt="likesIcon"></img><div className="CurrentVideo__likes">{selectedVid.likes}</div>
                
            </section>
            <p  className="CurrentVideo__desc">{selectedVid.description}</p>
           
        </main>
    )
}

export default CurrentVideoInfo;