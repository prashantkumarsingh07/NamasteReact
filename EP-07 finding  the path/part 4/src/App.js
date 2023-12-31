import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


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
    ],
    errorElement:<Error />
  },


]);



  const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />);
