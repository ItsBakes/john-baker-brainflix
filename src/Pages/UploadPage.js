import "./UploadPage.scss"
import UploadPreview from '../assets/images/Upload-video-preview.jpg'
import Publish from '../assets/images/publish.svg'

function UploadPage() {

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
                                <input className="UploadPage__input" placeholder="Add a title to your video"></input></label>
                            <label className="UploadPage__label">add a video description
                                <textarea className="UploadPage__textarea" placeholder="Add a description to your video"></textarea></label>
                        </form>
                        <section className="UploadPage__button-contianer">
                            <button className="UploadPage__publish"><img alt="upload icon" className="UploadPage__icon" src={Publish} />publish</button>
                            <button className="UploadPage__cancel">cancel</button>
                        </section>
                    </section>
                </section>

            </main >
        </>
    )
}

export default UploadPage