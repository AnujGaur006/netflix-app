
const VideoForeground = ({title, overview, genres}) => {
    return (
    <div className="pt-[16%] px-12 absolute w-full aspect-video bg-gradient-to-r from-black text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="pt-2 text-md w-5/12">{overview}</p>
        <p className="mt-4 text-white font-bold">{genres.join(' | ')}</p>
        <div>
            <button className="w-3/12 py-2 mt-8 font-bold text-xl text-white bg-zinc-500 rounded-lg">▶ Watch Now</button>
            <button className="w-16 py-2 ml-2 mt-8 font-bold text-xl text-white bg-zinc-500 rounded-lg">➕</button>
        </div>
    </div>)
}; 

export default VideoForeground;