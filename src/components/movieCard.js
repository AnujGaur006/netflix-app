import { BACKDROP_CDN_URL, IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
    // pt-[60px] 
    return (
        <div className="h-[250px] overflow-hidden">
            <div className="w-[160px] top-0 left-0 h-[250px]">
                <img className='rounded-lg' src={IMG_CDN_URL + movie.poster_path}/>
            </div>    
            {/* <div className="text-white absolute w-[200px] max-h-[250px] -mt-[235px] -ml-[20px] opacity-0 z-40 overflow-hidden bg-black hover:opacity-100 hover:scale-150 transition ease-in-out delay-300"> */}
            <div className="w-[160px] flex-grow top-0 left-0 h-[250px] -mt-[250px] z-1000 opacity-0 hover:opacity-100 hover:scale-[1] transition ease-in-out delay-300">
                    <img className='object-cover rounded-t-lg z-40' src={BACKDROP_CDN_URL + movie.backdrop_path}/>
                    <div className="p-2 bg-gradient-to-b from-black to-slate-800 rounded-b-lg min-h-[150px]">
                        <h3 className="text-white font-bold">{movie.original_title}</h3>
                        <div className="flex h-6 mt-2 align-middle">
                            <button className="text-xs font-medium leading-3 rounded py-2 w-10/12 text-black bg-white">Watch Now</button>
                            <button className="text-xs font-medium leading-3 rounded py-2 w-2/12 ml-1 bg-slate-900 text-white">Add</button>
                        </div>
                        <p className="text-[10px] leading-3 line-clamp-4 pt-2 text-white">{movie.overview}</p>
                    </div>
            </div>
         </div> 
    )
};

export default MovieCard;