import CommentForm from "../CommentForm/CommentForm"
import './Comments.scss'

function Comments({ selectedVid }) {

    if (!selectedVid) {
        return (
            <p> Loading. Please Wait</p>
        )
    }

    return (
        <main className="Comments__container">
            <div className="Comments__header">{selectedVid.comments?.length} Comments</div>
            <CommentForm />

            {selectedVid.comments?.map((comment) => {

                let date = new Date(comment.timestamp);
                const dateMath = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

                return (
                    <section className="Comments" key={comment.id}>
                        <div className="Comments__avatar"></div>
                        <div className="Comments__info">
                            <div className="Comments__name-date"><div className="Comments__name">{comment.name}</div>
                                <div className="Comments__date">{dateMath}</div></div>
                            <p className="Comments__body">{comment.comment}</p>
                        </div>
                    </section>
                )
            })}

        </main>)
}

export default Comments