

function CommentForm ({selectedVid}) {


    return (
        <>
        <section className="CommentForm__inputField">
            <img className="CommentForm__avatar" src="../../assets/images/Mohan-muruge.jpg" alt="avatar image"></img>
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


// need divider at bottom of section