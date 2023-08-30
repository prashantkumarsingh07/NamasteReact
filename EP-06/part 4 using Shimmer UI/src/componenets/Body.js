import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  // Local State Variable - Super powerfull variable
  const[listOfRestaurants,setlistOfRestaurants]=useState([]);
 
  useEffect(()=>
  {
    fetchData();
  },[]);
 const fetchData =async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
  const json=await  data.json();
 
  console.log(json);
  setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };
 


  return listOfRestaurants.length===0?<Shimmer/>:(<div className="body">
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