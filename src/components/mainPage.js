import VideoForeground from "./videoForeground";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import ExplorePage from "./explorePage";

const MainPage = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const movie = movies[Math.floor(Math.random() * movies.length)];
    const {original_title, overview, id, backdrop_path} = movie;
    // console.log(movie);
    return (
    <div>
        <VideoForeground title={original_title} overview={overview}/>
        <VideoBackground movie_poster={backdrop_path}/>
        <ExplorePage/>
    </div>);
};

export default MainPage;