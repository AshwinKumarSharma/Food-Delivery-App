import { CDN_IMG } from "../utils/constants";

const MenuListItems = ({itemsList}) => {
    return (
        <div>
            {itemsList.map((items) => (
                <div key={items.card.info.id} className="flex justify-between border-b-2 px-2 py-4">
                    <div className="text-left w-9/12">
                        <h2 className="text-lg">{items.card.info.name}</h2>
                        <p className="text-md">₹ {items.card.info.price / 100 || items.card.info.defaultPrice / 100}</p>
                        <p className="text-sm text-gray-400 py-4">{items.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="px-6 py-1 mx-7 my-20 font-semibold text-green-600 border border-gray-200 rounded-md bg-white shadow-lg">ADD +</button>
                        </div>
                        <img className="w-full h-24 rounded-lg" src={CDN_IMG+items.card.info.imageId}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuListItems;

