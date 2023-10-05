import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=() => {
 const [btnNameReact,setBtnNameReact]=useState("Login");
 const onlineStatus=useOnlineStatus();
 console.log("header render");

 useEffect(()=>{console.log("useEffect called")},[btnNameReact]);
 
  return(
  <div className="flex justify-between bg-pink-100  sm:bg-yellow-50 lg:bg-green-50 shadow-lg m-2">
     <div className="logo-container">
       <img className="w-40" src={LOGO_URL}/>
       </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
          Online Status: {onlineStatus?" 🟢": "🔴"}
        </li>
          <li className="px-4">
          <Link to="/">Home</Link></li>
          <li className="px-4">
          <Link to="/about"> About us</Link></li>
          <li className="px-4">
           <Link to="/contact"> Contact Us</Link>
           </li>
          <li className="px-4" >
           <Link to="/grocery"> Grocery</Link>
           </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={()=>{ btnNameReact === "Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");}}>{btnNameReact}</button>
        </ul>
      </div>
     </div>
  );
};

export default Header;

