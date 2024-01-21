import React, { lazy ,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResMenu from "./components/ResMenu"

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
            
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element : <Contact/>,
            },
            {
                path:"/resmenu/:resId",
                element: <ResMenu/>,
            },
            {
                path: "/grocery",
                element: 
                <Suspense fallback={<h1>Loading....</h1>} >
                    <Grocery/>
                </Suspense>
            }
        ],
        errorElement : <Error />,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)