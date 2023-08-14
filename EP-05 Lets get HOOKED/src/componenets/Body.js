import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body=()=>{
  // Local State Variable - Super powerfull variable
  const[listOfRestaurants,setlistOfRestaurants]=useState(resList);
  return(<div className="body">
    <div className="filter">
      <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4); 
      setlistOfRestaurants(filteredList); }}>Top Rated Restaurants</button>
    </div>
    <div className="restaurant-container">
     {
      listOfRestaurants.map((restaurant)=>( <RestaurantCard key ={restaurant.info.id} restData={restaurant}/>))
     }
     

    </div>
  </div>);
};

export default Body;