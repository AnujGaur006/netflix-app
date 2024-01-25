import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const movie_data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", MOVIE_API_OPTIONS);
        const dataJson = await movie_data.json();
        dispatch(addPopularMovies(dataJson.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;