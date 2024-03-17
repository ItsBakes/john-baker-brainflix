function UploadPage() {

  return (
      <>

          <main className="UploadVideo">
              <h1 className="UploadVideo__header">Upload Video</h1>
              <section className="UploadVideo__thumbnail-container">
                  <label className="UploadVideo__label">video thumbnail</label>
                  <img src="" alt="video Thumbnail" className="UploadVideo__thumbnail"></img>
              </section>
              <section className="UploadVideo__form-container">
                  <form className="UploadVideo__form">
                      <label className="UploadVideo__label">title your video</label>
                      <input className="UploadVideo__input" placeholder="Add a title to your video"></input>
                      <label className="UploadVideo__label">add a video description</label>
                      <textarea className="UploadVideo__textarea" placeholder="Add a description to your video"></textarea>
                      <button className="UploadVideo__publish"><img alt="upload icon" className="UploadVideo__icon" src="../../assets/images/upload.svg"/>publish</button>
                      <button className="uploadVideo__cancel">cancel</button>
                  </form>
              </section>

          </main >
      </>
  )
}

export default UploadPage