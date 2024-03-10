

function CommentForm (selectedVid) {


    return (
        <>
        <div className="CommentForm__header">3 Comments</div>
        <section className="CommentForm__inputField">
            <img className="CommentForm__avatar"></img>
            <form className="CommentForm__form">
                <label className="CommentForm__label">
                    <textarea type="text" className="CommentForm__textarea" placeholder="Add a new comment"></textarea>
                </label>
                <button className="CommentForm__button">comment</button>
            </form>
        </section>
        </>
    )
}

export default CommentForm;