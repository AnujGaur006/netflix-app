import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster}) => {
    return (
        <div className="w-[160px] ">
            <img className='rounded-lg' src={IMG_CDN_URL + poster}/>
        </div>
    )
};

export default MovieCard;