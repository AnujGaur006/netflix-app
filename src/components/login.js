import { useRef, useState } from "react";
import Header from "./header";
import { BACKGND_IMAGE } from "../utils/constants";
import { validData , validSignUpData} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [errorMsg,setErrorMsg] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    
    const toggleSignIn = () => {
        setSignIn(!signIn);
    };

    const handleFormValidation = () => {
         // to disable default form submission behavior which reloads screen post submission
        const msg = signIn ? validData(email.current.value, password.current.value) : 
                            validSignUpData(fullName.current.value, email.current.value, password.current.value);
        console.log(msg);
        setErrorMsg(msg);    
        if(msg) return;

        if(signIn){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;  
                    // console.log(user);
                    // navigate("/browse");
                }).catch((error) => {
                    setErrorMsg(error.code + "-" + error.message);
                });
        }else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {displayName : fullName.current.value})
                        .then(() => {
                            const { uid, email, displayName} = auth.currentUser;
                            dispatch(addUser({
                                        uid : uid, 
                                        email : email,
                                        displayName : displayName,
                                    })
                                );
                            // navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMsg(error.message);
                        })
                    console.log(user);
                }).catch((error) => {
                    setErrorMsg(error.code + "-" + error.message);
                });
        }
     };

     const backgroundImageStyle = {
        height: '100vh',
        margin: 0,
        background: `url(${BACKGND_IMAGE}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      };

    return <div style={backgroundImageStyle}>
        <Header/>  
        <div className="login-content relative w-4/12 h-[75vh] min-h-[480px] mx-auto top-28 bg-slate-900 bg-opacity-85 border-4 rounded-lg">
               <div className="p-2 mx-4">
                    <h1 className="text-white text-3xl font-bold py-4">{signIn ? "Sign In" : "Sign Up"}</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col pt-8">
                        {!signIn && <input ref={fullName} className="p-4 my-2 text-white bg-gray-800" type="text" placeholder="Enter your name"/>}
                        <input ref={email} className="p-4 my-2 text-white bg-gray-800" type="email" placeholder="Email"/>
                        <input ref={password} className="p-4 my-2  text-white bg-gray-800" type="password" placeholder="Password"/>
                        <p className="py-2 text-red-700 text-md">{errorMsg}</p>
                        <button className="mt-2 py-4 text-white bg-red-700 opacity-100 font-bold" onClick={handleFormValidation}>{signIn ? "Sign In" : "Sign Up"}</button>
                    </form>
                    <div className="py-2 text-white"><a href='#' onClick={toggleSignIn} >
                        {signIn ? "New to Netflix? Sign up now" : 
                                "Already Registered? Sign in here"}</a>.</div>
               </div>
        </div> 
          
    </div>
};

export default Login;