import { useSelector } from 'react-redux';
import Header from './header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from './hooks/usePopularMovies';
import MainPage from './mainPage';
import GptSearch from './gptSearch';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch); 
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header/>
            {
                showGptSearch ? (<GptSearch/>) : (<><MainPage/></>) 
            }
        </div>
    );
};

export default Browse;