import CurrentVideoInfo from "../CurrentVideoInfo/CurrentVideoInfo";



function Hero ({selectedVid}) {

    return (
        <>
        <img src={selectedVid.image}></img>
        <CurrentVideoInfo selectedVid={selectedVid}/>
        </>
    )
}

export default Hero;