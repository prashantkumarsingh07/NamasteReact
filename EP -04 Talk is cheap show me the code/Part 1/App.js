import React from "react";
import ReactDOM from "react-dom/client";

const Header=() => {
  return(
  <div className="header">
     <div className="logo-container">
       <img className="logo" src="https://i.pinimg.com/originals/b1/9c/e4/b19ce476853d82236b88514ff96a1330.jpg  " />
       </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li> Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
     </div>
  );
};


const RestaurantCard=()=>{
return(
  <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img  alt ="res-logo" 
    className="res-logo"
    src=" https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qjlxj9scdfjn6jlytt1x   "/> 
    <h3>Meghana foods</h3>
    <h5>Biryani,North Indian, Asian</h5>
    <h5>4.4 stars</h5>
    <h5>38 minutes </h5>
  </div>
  
);
};

const Body=()=>{
  return(<div className="body">
    <div className="search">Search</div>
    <div className="restaurant-container">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
     <RestaurantCard/>
      

    </div>
  </div>);
};

const AppLayout=()=>
{
  return( 
    <div className="app">
      <Header/>
      <Body/>
    </div>);
  
};

  const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(<AppLayout />);
