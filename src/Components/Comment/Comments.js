import CommentForm from "../CommentForm/CommentForm"
import './Comments.scss'
import { useState, useEffect } from "react"
import axios from "axios"

function Comments({ videoIdDisplay }) {
    const apiKey = "?api_key=ce976863-77d9-4921-9e41-14e53f8217da"
    const baseURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/`
    const [selectedVid, setSelectedVid] = useState(null)

    useEffect(() => {
        if (videoIdDisplay) {
            const getVidDetails = async () => {
                const response = await axios.get(`${baseURL}${videoIdDisplay}${apiKey}`)
                setSelectedVid(response.data)
                console.log(response.data)
            }
            getVidDetails()
        }
    }, [videoIdDisplay])

    if (!selectedVid) {
        return (
            <p> Loading. Please Wait</p>
        )
    }

    return (
        <><div className="Comments__header">{selectedVid.comments.length} Comments</div>
            <CommentForm />

            {selectedVid.comments.map((comment) => {

                let date = new Date(comment.timestamp);
                const dateMath = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

                return (
                    <>
                        <section className="Comments">
                            <img className="Comments__avatar" src=""></img>
                            <div className="Comments__info">
                                <div className="Comments__name-date"><div className="Comments__name">{comment.name}</div>
                                    <div className="Comments__date">{dateMath}</div></div>
                                <p className="Comments__body">{comment.comment}</p>
                            </div>
                        </section>
                    </>
                )
            })}

        </>)
}

export default Comments