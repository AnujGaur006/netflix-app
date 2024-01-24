import Header from './header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainPage from './mainPage';

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header/>
            <MainPage/>
        </div>
    );
};

export default Browse;