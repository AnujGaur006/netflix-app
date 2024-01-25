import { useSelector } from 'react-redux';
import Header from './header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from './hooks/usePopularMovies';
import MainPage from './mainPage';
import GptSearch from './gptSearch';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch); 
    useNowPlayingMovies();
    usePopularMovies();

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