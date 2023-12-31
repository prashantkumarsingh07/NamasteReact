import React,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./componenets/Shimmer";

//  import Grocery from "./componenets/Grocery";

 const Grocery=lazy(()=>import("./componenets/Grocery") );/*This import is a function which takes the path  not same as above import   */


const AppLayout=()=>
{
  return( 
    <div className="app">
      <Header/>
      <Outlet/>
    </div>);
  
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={Shimmer}> <Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      },
    ],
    errorElement:<Error />
  },


]);



  const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />);
