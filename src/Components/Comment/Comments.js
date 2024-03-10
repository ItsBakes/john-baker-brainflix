import CommentForm from "../CommentForm/CommentForm"

function Comments ({selectedVid}) {
    
    
    return (
        <><div>{selectedVid.comments.length} Comments</div>
        <CommentForm />
        <div>next videos</div>
    {selectedVid.comments.map((comment) => {
    return (
        <>
        <section>
            <img alt="Comments__avatar"></img>
            <div>
                <div>{comment.name}</div>
                <div>{comment.timestamp}</div>
                <p>{comment.comment}</p>
                </div>
        </section>
        </>
    ) })}
    </>)
}

export default Comments