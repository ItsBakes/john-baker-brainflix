import "./UploadPage.scss"
import UploadPreview from '../assets/images/Upload-video-preview.jpg'
import Publish from '../assets/images/publish.svg'
import { Navigate } from "react-router-dom"

function UploadPage() {
    const baseURL = `http://localhost:8080/videos/`

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postVid = {
            title: e.target.title.data,
            description: e.target.description.data
        }
        try{
        const response = await axios.post(`${baseURL}` + postVid)
        console.log(response.data) 
        }catch(error){
            alert('Form ')
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
                        <form className="UploadPage__form">
                            <label className="UploadPage__label">title your video
                                <input className="UploadPage__input" placeholder="Add a title to your video" type="title"></input></label>
                            <label className="UploadPage__label">add a video description
                                <textarea className="UploadPage__textarea" placeholder="Add a description to your video" type="description"></textarea></label>
                        </form>
                        <section className="UploadPage__button-contianer">
                            <button className="UploadPage__publish" onSubmit={handleSubmit} type="submit"><img alt="upload icon" className="UploadPage__icon" src={Publish} />publish</button>
                            <button className="UploadPage__cancel">cancel</button>
                        </section>
                    </section>
                </section>

            </main >
        </>
    )
}

export default UploadPage