import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
const Body = () => {
    const [listOfRestaurant, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setResList((json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
    }


    return (
    <>
        <div className="m-5">
            <input type="text" className="border mx-5" />
            <button className="border px-5">Search</button>
            <button className="border px-5 mx-5" onClick={
                () => {
                    const topRatedResList = listOfRestaurant.filter(restaurant => restaurant.info.avgRating >= 4);
                    setResList(topRatedResList);
                }
            }>Top Rated Restaurant</button>
        </div>
        <div className="flex flex-wrap justify-center">
            {listOfRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
            ))}
            
        </div>
    </>
    )
}

export default Body;