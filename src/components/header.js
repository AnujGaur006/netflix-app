import { signOut,onAuthStateChanged  } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
   
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (user) => {
            console.log("User -> " + user);
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

    return (
        <div className="absolute px-16 py-2 bg-gradient-to-b black from-black z-10 w-full flex align-middle justify-between" >
            <img className="w-56 bg-cover" src={NETFLIX_LOGO} alt='logo'/>
            {/* { auth.currentUser && <div>{auth.currentUser.displayName}</div>} */}
            {auth.currentUser && <div className="w-16">
                <button onClick={handleSignOut} className="font-bold text-white text-xs border-1"><img className="object-contain" 
                    src='https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755' alt='usericon'/>
                    Sign Out
                </button>
            </div>}
        </div>
    );
};

export default Header;