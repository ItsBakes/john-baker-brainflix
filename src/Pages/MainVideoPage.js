function MainVideoPage() {
    const [videos, setVideos] = useState(Videos);


    const [selectedVid, setSelectedVid] = useState(VideoDetails[0])


    const handleSelectVid = (clickedId) => {
        const foundVid = VideoDetails.find((video) => clickedId === video.id)
        setSelectedVid(foundVid)
    }
    const filteredVids = videos.filter((video) => video.id !== selectedVid.id)

    return (
        <>
            <Header />
            <CurrentVideo selectedVid={selectedVid} />
            <main className='Content'>
                <Comments selectedVid={selectedVid} />
                <NextVideos Videos={filteredVids} selectVid={handleSelectVid} />
            </main>
        </>
    );
}

export default MainVideoPage;