import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { BACKDROP_CDN_URL, IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({movie_poster}) => {    
   
    // const trailer = useSelector((store) => store.movies?.trailerVideos); 
    // useMovieTrailer(movie_id);

    return (
        <div className="pointer-events-none">
            <img className='w-full aspect-video' src={BACKDROP_CDN_URL+movie_poster}/>

            {/* <iframe className="w-full aspect-video"
                src={"https://www.youtube.com/embed/" + trailer?.key + "?rel=0&showInfo=0&controls=0&autoplay=1&mute=1"} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
             </iframe> */}
        </div>
    )

};

export default VideoBackground;