import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const movie_data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=2", MOVIE_API_OPTIONS);
        const dataJson = await movie_data.json();
        dispatch(addUpcomingMovies(dataJson.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;