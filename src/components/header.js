import { signOut,onAuthStateChanged  } from "firebase/auth";
import { NETFLIX_LOGO, supportedLang } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser} from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const onSuggestionPage = useSelector((store) => store.gpt.toggleGptSearch);
   
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const {uid, email, displayName } = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                navigate("/browse");
            }else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unmounting, when header unloads
        return () => unsubsribe();
    },[]);

    const handleGptSearchToggle = () => {
        dispatch(toggleGptSearchView());
    };
    const changeLang = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="absolute px-16 py-2 bg-gradient-to-b black from-black z-10 w-full flex align-middle justify-between" >
            <img className="w-56 bg-cover" src={NETFLIX_LOGO} alt='logo'/>
            {auth.currentUser && 
            
            <div className="flex p-2">  
                { onSuggestionPage && 
                <select className="max-h-8 bg-gray-800 text-white" onChange={changeLang}>
                    {supportedLang.map((lang) => <option key={lang.key} value={lang.key}>{lang.name}</option>)}
                </select>  }
                <button onClick={handleGptSearchToggle} className="px-2 mx-4 max-h-12 align-middle rounded-lg text-white bg-purple-600">
                   { onSuggestionPage ? "Back To HomePage" : "Search GPT"}</button>
                <button onClick={handleSignOut} className="font-bold w-16 text-white text-xs border-1"><img className="object-contain" 
                    src='https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755' alt='usericon'/>
                    Sign Out
                </button>
            </div>}
        </div>
    );
};

export default Header;