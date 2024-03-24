import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";
import './CurrentVideo.scss'



function CurrentVideo ({selectedVid}) {


    if (!selectedVid) {
        return (
            <p> Loading. Please Wait</p>
        )
    }  

    return (
        <>
        <div className="CurrentVideo__video-Container">
            <video className="CurrentVideo__video" controls poster={selectedVid.image}><source src={selectedVid.video}/></video>
            </div>
        <CurrentVideoInfo selectedVid={selectedVid} />
        </>
    )
}

export default CurrentVideo;