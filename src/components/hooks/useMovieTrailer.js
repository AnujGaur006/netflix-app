import { addTrailerVideos } from "../../utils/movieSlice";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const videoDate = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,
            MOVIE_API_OPTIONS);
        const videoDataJson = await videoDate.json();
        
        // try to play anything else then trailer later on
        const trailerVideos = videoDataJson.results.filter((video) => video.type === 'Trailer');
        const trailer = trailerVideos.length === 0 ? 
            videoDataJson.results[Math.floor(Math.random() * videoDataJson.length)] :
            trailerVideos[Math.floor(Math.random() * trailerVideos.length)];
        dispatch(addTrailerVideos(trailer));
    };

    
    useEffect(()=> {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;