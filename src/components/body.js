import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { useDispatch } from "react-redux";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);

    return ( 
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    );    
}

export default Body;