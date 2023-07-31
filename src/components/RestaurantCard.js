import { RES_CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData;
    
    // const {resName, cuisines} = props;
    return (
        <div className="border w-60 p-1 m-2">
            <img src= {RES_CARD_IMG + cloudinaryImageId} />
            <h3 className="font-semibold">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div> 
)};

export default RestaurantCard;