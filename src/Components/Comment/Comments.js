import CommentForm from "../CommentForm/CommentForm"
import './Comments.scss'

function Comments ({selectedVid}) {
    
    
    return (
        <><div className="Comments__header">{selectedVid.comments.length} Comments</div>
        <CommentForm />
        
    {selectedVid.comments.map((comment) => {
    return (
        <>
        <section className="Comments">
            <img className="Comments__avatar" src=""></img>
            <div className="Comments__info">
                <div className="Comments__name">{comment.name}</div>
                <div className="Comments__date">{comment.timestamp}</div>
                <p className="Comments__body">{comment.comment}</p>
                </div>
        </section>
        </>
    )
    })}
    <div>next videos</div> 
    </>)
}

export default Comments