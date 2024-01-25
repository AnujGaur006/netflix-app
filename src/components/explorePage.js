import { useSelector } from "react-redux";
import MovieTile from "./movieTiles";

const ExplorePage = () => {
    const movies = useSelector((store) => store.movies);

    return (
    <div className="pl-4 bg-black">
        <div className="-mt-64 relative z-20">
            <MovieTile title={"Now Trending"} movies={movies.nowPlayingMovies}/>
            <MovieTile title={"Popular"} movies={movies.popularMovies}/>
            <MovieTile title={"Action,Thriller"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>);
};

export default ExplorePage;    