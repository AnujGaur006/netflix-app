import { useSelector } from "react-redux";
import { languageOptions } from "../utils/langOptions";
import { useRef } from "react";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store?.config?.lang);
    const searchText = useRef(null);

    const handleGptSearch = async () => {
        const userRequest = searchText.current.value;
    //     const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + userRequest + 
    //                 ". Only give me name of 5 movies";
    //     const gptResults = await openai.chat.completions.create({
    //         model: 'gpt-3.5-turbo',
    //         messages: [{ role: 'user', content: gptQuery }],
    //   });
      console.log(userRequest);     
    };

    

    return (
        <div className="pt-[10%] flex justify-center">
           <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" className="p-4 m-4 col-span-9" 
                    placeholder={languageOptions[langKey]?.searchPlaceholder}/>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700" 
                    onClick={handleGptSearch}>{languageOptions[langKey]?.search}
                </button>
           </form>
        </div>
    );
};

export default GptSearchBar;