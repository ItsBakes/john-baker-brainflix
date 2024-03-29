import "./UploadPage.scss"
import UploadPreview from '../assets/images/Upload-video-preview.jpg'
import Publish from '../assets/images/publish.svg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function UploadPage() {
    const baseURL = `http://localhost:8080/videos/`
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postVid = {
            title: title,
            description: description
        }
        try {
            const response = await axios.post(`${baseURL}`, postVid)
            alert(`Form Submitted Successfully`)
            navigate('/')
        } catch (error) {
            alert('Form Was not submitted, please try again')
            console.log(error)
        }

    }

    return (
        <>
            <main className="UploadPage">
                <h1 className="UploadPage__header">Upload Video</h1>
                <section className="UploadPage__container">
                    <section className="UploadPage__thumbnail-container">
                        <label className="UploadPage__label">video thumbnail</label>
                        <img src={UploadPreview} alt="video Thumbnail" className="UploadPage__thumbnail"></img>
                    </section>
                    <section className="UploadPage__form-container">
                        <form className="UploadPage__form" onSubmit={handleSubmit}>
                            <label className="UploadPage__label">title your video
                                <input className="UploadPage__input" placeholder="Add a title to your video" value={title} onChange={(e) => setTitle(e.target.value)}></input></label>
                            <label className="UploadPage__label">add a video description
                                <textarea className="UploadPage__textarea" placeholder="Add a description to your video" value={description} onChange={(e) => setDescription(e.target.value)}></textarea></label>
                            <section className="UploadPage__button-contianer">
                                <button className="UploadPage__publish" type="submit"><img alt="upload icon" className="UploadPage__icon" src={Publish} />publish</button>
                                <button className="UploadPage__cancel">cancel</button>
                            </section>
                        </form>
                    </section>
                </section>

            </main >
        </>
    )
}

export default UploadPage