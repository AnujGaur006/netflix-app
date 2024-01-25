import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoBackground = ({movie_id}) => {    
   
    const trailer = useSelector((store) => store.movies?.trailerVideos); 
    useMovieTrailer(movie_id);

    return (
        <div >
            <iframe className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
             </iframe>
        </div>
    )

};

export default VideoBackground;