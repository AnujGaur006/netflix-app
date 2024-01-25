import { BACKGND_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./gptMovieSuggestion";
import GptSearchBar from "./gptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BACKGND_IMAGE}/>
            </div>
           <GptSearchBar/>
           <GptMovieSuggestion/>
        </div>
    );
};

export default GptSearch;