import { RES_CARD_IMG } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData;
    
    // const {resName, cuisines} = props;
    
    return (
        <div className="w-1/6 p-1 mx-6 cursor-pointer hover:scale-95 duration-300">
            <img className="w-full h-3/6 rounded-xl" src= {RES_CARD_IMG + cloudinaryImageId} />
            <h3 className="font-semibold text-xl pt-4">{name}</h3>
            <h4 className="items-center">
            <FontAwesomeIcon className="pr-1" icon={faStar} style={{color: "#2d5e17",}} />
                {avgRating}</h4>
            <h4 className="text-gray-500">{cuisines.join(', ')}</h4>
            <h4 className="text-gray-500">{costForTwo}</h4>
            <h4 className="text-gray-500">{sla.deliveryTime} minutes</h4>
        </div> 
)};

export default RestaurantCard;