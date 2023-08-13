import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_API } from "../utils/constants";
import { useRestaurant } from "../context/LocationContext";


const Body = () => {
    const Restaurant = useRestaurant();
    const [searchText, setSearchText] = useState("");
    
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        Restaurant.fetchCurrentUserLocationData();
    },[])

    if(onlineStatus === false) return <h1 className="text-2xl font-bold text-center my-5">Looks like you are Offline!!! Please Check your internet connection.</h1>

    const handleSearch = () => {
        const filteredRestaurant = Restaurant.listOfRestaurant.filter(restaurant => (
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
            Restaurant.setFilteredList(filteredRestaurant);
    }

    const handlekeyPress=(event)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }};

    return (Restaurant.listOfRestaurant.length === 0)? <Shimmer/> : (
    <>  
        <div className="mt-10 mb-6 flex justify-center">
            <input type="text" className="border mx-5 rounded-xl py-1 pl-2" value={searchText} 
            onKeyDown={handlekeyPress}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}/>

            <button className="border px-5 mx-2 rounded-xl py-1" onClick={handleSearch}>Search</button>

            <button className="border px-5 mx-2 rounded-xl py-1 focus:bg-gray-400" onClick={
                () => {
                    const topRatedResList = listOfRestaurant.filter(restaurant => (
                        restaurant.info.avgRating >= 4));
                    setFilteredList(topRatedResList);
                }
            }>Rating 4.0 & above</button>

            <button className="border px-5 mx-2 rounded-xl py-1 focus:bg-gray-400 active:bg-gray-400" onClick={
                () => {
                    const fastDelivery = listOfRestaurant.filter(restaurant => (
                        restaurant.info.sla.deliveryTime < 25));
                    setFilteredList(fastDelivery);
            }}>Fast Delivery</button>

            <button className="border px-5 mx-2 rounded-xl py-1 focus:bg-gray-400" onClick={
                () => {
                    const price = listOfRestaurant.filter((restaurant) => (Number(
                        restaurant.info.costForTwo.match(/\b\d+\b/g)) < 300
                    ));
                    setFilteredList(price);
                }
            }>Less than Rs. 300</button>

            <button className="border px-5 mx-2 rounded-xl py-1" onClick={
                () => {
                    setFilteredList(listOfRestaurant);
                }}>Clear Filters</button>
        </div>

        <div>
            <h1 className="text-3xl my-4 mx-40 font-bold">{Restaurant.heading?.data?.cards[1]?.card?.card?.header?.title || Restaurant.heading?.data?.cards[2]?.card?.card?.header?.title}</h1>
        </div>

        <div className="flex flex-wrap justify-center">
            {Restaurant?.filteredList.map((restaurant) => (
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard resData={restaurant.info}/></Link>
            ))}
            
        </div>
    </>
    )
}
export default Body;