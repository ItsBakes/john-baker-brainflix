import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";



function CurrentVideo ({selectedVid}) {

    return (
        <>
        <img src={selectedVid.image}></img>
        <CurrentVideoInfo selectedVid={selectedVid}/>
        </>
    )
}

export default CurrentVideo;