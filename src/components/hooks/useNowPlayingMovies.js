import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const movie_data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=page=1", MOVIE_API_OPTIONS);
        const dataJson = await movie_data.json();
        dispatch(addNowPlayingMovies(dataJson.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;