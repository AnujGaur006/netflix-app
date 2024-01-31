import VideoForeground from "./videoForeground";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import ExplorePage from "./explorePage";
import getGenreNames from "./getGenreNames";

const MainPage = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const movie = movies[Math.floor(Math.random() * movies.length)];
    const {original_title, overview, id, backdrop_path, genre_ids} = movie;
    const genreNames = getGenreNames(genre_ids);

    return (
    <div>
        <VideoForeground title={original_title} overview={overview} genres={genreNames}/>
        <VideoBackground movie_poster={backdrop_path}/>
        <ExplorePage/>
    </div>);
};

export default MainPage;