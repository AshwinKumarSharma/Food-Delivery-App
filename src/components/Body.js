import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_API } from "../utils/constants";


const Body = () => {
    const [listOfRestaurant, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setResList((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        setFilteredList((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
    }

    if(onlineStatus === false) return <h1>Looks like you are Offline!!! Please Check your internet connection.</h1>

    console.log(listOfRestaurant);  

    return (listOfRestaurant.length === 0)? <Shimmer/> : (
    <>
        <div className="mt-10 mb-6 flex justify-center">
            <input type="text" className="border mx-5 rounded-xl py-1 pl-2" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>

            <button className="border px-5 mx-2 rounded-xl py-1" onClick={
                () => {
                    const filteredRestaurant = listOfRestaurant.filter(restaurant => (
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    setFilteredList(filteredRestaurant);
                }
            }>Search</button>

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

        <div className="flex flex-wrap justify-center">
            {filteredList.map((restaurant) => (
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard resData={restaurant.info}/></Link>
            ))}
            
        </div>
    </>
    )
}
export default Body;