import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster}) => {
    return (
        <div className="w-48 min-w-48">
            <img src={IMG_CDN_URL + poster}/>
        </div>
    )
};

export default MovieCard;