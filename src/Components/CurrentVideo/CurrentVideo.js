import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";
import './CurrentVideo.scss'



function CurrentVideo ({selectedVid}) {

    return (
        <>
        <video className="CurrentVideo__video" controls poster={selectedVid.image}><source src={selectedVid.video}></source></video>
        <CurrentVideoInfo selectedVid={selectedVid}/>
        </>
    )
}

export default CurrentVideo;