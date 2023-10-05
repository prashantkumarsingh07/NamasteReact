import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
 import Shimmer from "./Shimmer";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";
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
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await  data.json();
 
  
  setlistOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurant( json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
 };
  
 const onlineStatus=useOnlineStatus();

 if(onlineStatus===false) return (<h1>Looks Like you are Offline , check your internet connection</h1>
 );

  return listOfRestaurants.length===0?(<Shimmer/>):(<div className="body">
    <div className="filter flex">
     <div className="search m-4 px-4">
      <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
      <button  className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
        // Filter the restaurant cards nd update the UI
        // Search text
        console.log(searchText);
        const filteredRestaurant=listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase() ) );
        setFilteredRestaurant(filteredRestaurant);
      }}>Search</button>
       </div>
       <div className=" m-4 p-4 flex items-center">
       <button className=" px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4); 
      setlistOfRestaurants(filteredList); }}>Top Rated Restaurants</button>
       </div>
       

      </div>
      

   
    <div className="flex flex-wrap">
     {
      filteredRestaurant.map((restaurant)=>( <Link key ={ restaurant.info.id} to={"/restaurants/"+restaurant.info.id }><RestaurantCard  restData={restaurant}/></Link> ))
     }
    

    </div>
    
  </div>);
};

export default Body;