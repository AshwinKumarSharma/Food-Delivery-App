import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuListItems from "./MenuListItems";
import { useState } from "react";

const MenuCategory = ({data}) => {

    const [showMenuList, setShowMenuList] = useState(false);

    const handleClick = () => {
        showMenuList ? setShowMenuList(false) : setShowMenuList(true);
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span><FontAwesomeIcon icon={faChevronDown}/></span>
                </div>
                <div>
                    {showMenuList && <MenuListItems itemsList={data.itemCards}/>}
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;