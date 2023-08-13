import { createContext, useContext, useState } from "react";
import { getRestaurantDataForLocation } from "../utils/constants";

export const LocationContext = createContext(null);

export const useRestaurant = () => {
    return useContext(LocationContext);
}

export const ContextProvider = (props) => {
    const [listOfRestaurant, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [heading, setHeading] = useState("");

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition( async(position) => {
            const response = await getRestaurantDataForLocation(
                position.coords.latitude,
                position.coords.longitude
                );
            setHeading(response);
            setResList((response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
            setFilteredList((response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || (response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        });
    };

    return (
        <LocationContext.Provider value={{listOfRestaurant, filteredList, heading, fetchCurrentUserLocationData}}>
            {props.children}
        </LocationContext.Provider>
    )
};