import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import resList from "../utils/mockData";
const Body=()=>{
  // Local State Variable - Super powerfull variable
  const[listOfRestaurants,setlistOfRestaurants]=useState(resList);
 
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();}

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