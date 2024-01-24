import VideoForeground from "./videoForeground";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";

const MainPage = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const movie = movies[0];
    const {original_title, overview, id} = movie;
    return (
    <div>
        <VideoForeground title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>);
};

export default MainPage;