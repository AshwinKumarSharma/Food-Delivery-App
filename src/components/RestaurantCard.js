import { CDN_IMG } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData;
    
    return (
        <div className="p-4 mx-4 mb-1 w-[250px] cursor-pointer hover:scale-95 duration-300">
            <div>
                <img className="w-full h-56 rounded-xl" src= {CDN_IMG + cloudinaryImageId} />
            </div>
            <div className="pl-1  ">
                <h3 className="font-semibold text-xl pt-4 truncate">{name}</h3>
                <h4 className="items-center">
                <FontAwesomeIcon className="pr-1" icon={faStar} style={{color: "#2d5e17",}} />
                    {avgRating}</h4>
                <h4 className="text-gray-500 truncate">{cuisines.join(', ')}</h4>
                <h4 className="text-gray-500">{costForTwo}</h4>
                <h4 className="text-gray-500">{sla.deliveryTime} minutes</h4>
            </div>
        </div> 
)};

export default RestaurantCard;