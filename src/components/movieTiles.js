import MovieCard from "./movieCard";

const MovieTile = ({title, movies}) => {
    if(!movies) return; 
    return (
        <div className="px-6">
            <h1 className="font-bold text-white py-2 text-2xl">{title}</h1>
                <div className="flex gap-2 overflow-x-hidden">
                {
                    movies?.map((movie) => <MovieCard key={movie.id} poster={movie.poster_path}/>)
                }
                </div>
        </div>
    );
};

export default MovieTile;