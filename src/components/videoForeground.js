const VideoForeground = ({title, overview}) => {
    return (
    <div className="pt-[16%] px-12 absolute w-full aspect-video bg-gradient-to-r from-black text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="pt-2 text-md w-5/12">{overview}</p>
    </div>);
}; 


export default VideoForeground;