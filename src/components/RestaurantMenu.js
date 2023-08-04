import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const [resInfo, setResInfo] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restaurantId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => (
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")}</p>
            {categories.map((category, index) => (
            <MenuCategory
             key={category?.card.card.title} 
             data={category?.card.card}
             showMenuList={index === showIndex ? true : false}
             setShowIndex={() => setShowIndex(index)}
            />
            ))}
        </div>
    )
};

export default RestaurantMenu;