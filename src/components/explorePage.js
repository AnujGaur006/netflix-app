import { useSelector } from "react-redux";
import MovieTile from "./movieTiles";

const ExplorePage = () => {
    const movies = useSelector((store) => store.movies);

    return (
    <div className="bg-black">
        <div className="-mt-60 relative z-20">
            <MovieTile title={"Now Trending Movies"} movies={movies.nowPlayingMovies}/>
            <MovieTile title={"Popular Movies"} movies={movies.popularMovies}/>
            <MovieTile title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieTile title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        </div>
    </div>);
};

export default ExplorePage;    