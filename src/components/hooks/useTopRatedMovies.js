import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../../utils/constants";
import { addTopRatedMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const movie_data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", MOVIE_API_OPTIONS);
        const dataJson = await movie_data.json();
        dispatch(addTopRatedMovies(dataJson.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;