import CommentForm from '../CommentForm/CommentForm'
function CurrentVideoInfo ({selectedVid}) {


    return (
        <main className="CurrentVideo">
            <h1 className="CurrentVideo__header">{selectedVid.title.value}</h1>
            <section className="CurrentVideo__info">
                <h2 className="CurrentVideo__author">By {selectedVid.channel.value}</h2>
                <div className="CurrentVideo__date">{selectedVid.timestamp}</div>
                <i className="CurrentVideo__icon"></i><div className="CurrentVideo__views">{selectedVid.views}</div>
                <i className="CurrentVideo__icon"></i><div className="CurrentVideo__likes">{selectedVid.likes}</div>
                
            </section>
            <p  className="CurrentVideo__desc">{selectedVid.description}</p>
            <CommentForm selectedVid={selectedVid} />
        </main>
    )
}

export default CurrentVideoInfo;