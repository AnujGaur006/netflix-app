const VideoForeground = ({title, overview}) => {
    return (
    <div className="pt-[16%] px-12 absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="pt-2 w-4/12">{overview}</p>
        <div className="mt-4">
            <button className="bg-white text-black py-2 px-8 text-md font-bold rounded-md hover:bg-opacity-80">▶ Play</button>
            <button className="ml-2 bg-gray-500 py-2 px-8 text-md rounded-md font-bold">ℹ More Info</button>
        </div>
    </div>);
}; 


export default VideoForeground;