import avatar from '../../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'
import comment from '../../assets/images/add_comment.svg'

function CommentForm() {


    return (
        <>
            <section className="CommentForm__inputField">
                <img className="CommentForm__avatar" src={avatar} alt="avatar image"></img>
                <form className="CommentForm__form">
                    <div className='CommentForm__container'><label className="CommentForm__label"> join the conversation</label>
                        <textarea type="text" className="CommentForm__textarea" placeholder="Add a new comment"></textarea>
                    </div>

                    <div className='CommentForm__button-container'><button className="CommentForm__button"><img className="CommentForm__icon" src={comment}/>comment</button></div>
                </form>
            </section>
        </>
    )
}

export default CommentForm;