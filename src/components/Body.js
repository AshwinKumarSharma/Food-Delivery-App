import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [listOfRestaurant, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setResList((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        setFilteredList((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        console.log(json);
    }


    return (listOfRestaurant.length === 0)? <Shimmer/> : (
    <>
        <div className="m-5">
            <input type="text" className="border mx-5" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>

            <button className="border px-5" onClick={
                () => {
                    const filteredRestaurant = listOfRestaurant.filter(restaurant => (
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    setFilteredList(filteredRestaurant);
                }
            }>Search</button>

            <button className="border px-5 mx-5" onClick={
                () => {
                    const topRatedResList = listOfRestaurant.filter(restaurant => (
                        restaurant.info.avgRating >= 4));
                    setFilteredList(topRatedResList);
                }
            }>Top Rated Restaurant</button>
        </div>

        <div className="">
            {filteredList.map((restaurant) => (
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard resData={restaurant.info}/></Link>
            ))}
            
        </div>
    </>
    )
}
export default Body;