import { useState } from "react";
import Header from "./header";
import { BACKGND_IMAGE } from "../utils/constants";

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const toggleSignIn = () => {
        setSignIn(!signIn);
    };

    return <div>
        <Header/>  
        <div className="absolute">
            <img src={BACKGND_IMAGE} alt="backgnd"/> 
        </div>
        <div className="login-content relative w-4/12 h-[75vh] mx-auto top-40 bg-slate-900 bg-opacity-85 border-4 rounded-lg">
               <div className="p-12 mx-4">
                    <h1 className="text-white text-3xl font-bold py-4">{signIn ? "Sign In" : "Sign Up"}</h1>
                    <form className="flex flex-col">
                        {!signIn && <input className="p-4 my-2 text-white bg-gray-800 placeholder-white" type="text" placeholder="Enter your name"/>}
                        <input className="p-4 my-2 text-white bg-gray-800 placeholder-white" type="email" placeholder="Email"/>
                        <input className="p-4 my-2  text-white bg-gray-800" type="password" placeholder="Password"/>
                        <button className="mt-8 py-4 text-white bg-red-700 opacity-100 font-bold">{signIn ? "Sign In" : "Sign Up"}</button>
                    </form>
                    <div className="py-2 text-white"><a href='#' onClick={toggleSignIn}>
                        {signIn ? "New to Netflix? Sign up now" : 
                                "Already Registered? Sign in here"}</a>.</div>
               </div>
        </div> 
          
    </div>
};

export default Login;