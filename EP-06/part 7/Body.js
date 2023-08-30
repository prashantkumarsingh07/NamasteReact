import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
 import Shimmer from "./Shimmer";

const Body=()=>{
  // Local State Variable - Super powerfull variable
  const[listOfRestaurants,setlistOfRestaurants]=useState([]);
 const[searchText,setSearchText]=useState("");
 const[filteredRestaurant,setFilteredRestaurant]=useState([]);
 console.log("body renderd");
  useEffect(()=>
  {
    fetchData();
  },[]);
 const fetchData =async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
  const json=await  data.json();
 
  
  setlistOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurant( json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
 };
  return listOfRestaurants.length===0?(<Shimmer/>):(<div className="body">
    <div className="filter">
     <div className="search">
      <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
      <button onClick={()=>{
        // Filter the restaurant cards nd update the UI
        // Search text
        console.log(searchText);
        const filteredRestaurant=listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase() ) );
        setFilteredRestaurant(filteredRestaurant);
      }}>Search</button>
       </div>
      <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4); 
      setlistOfRestaurants(filteredList); }}>Top Rated Restaurants</button>
    </div>
    <div className="restaurant-container">
     {
      filteredRestaurant.map((restaurant)=>( <RestaurantCard key ={restaurant.info.id} restData={restaurant}/>))
     }
    

    </div>
  </div>);
};

export default Body;