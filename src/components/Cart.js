import { useDispatch, useSelector } from "react-redux";
import MenuListItems from "./MenuListItems";
import { store } from "@reduxjs/toolkit";
import { clearCart } from "../utils/cartSlice";
import { CDN_IMG } from "../utils/constants";
import { removeItems } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItem = () => {
        dispatch(removeItems());
    }

    return (
        <div className="text-center p-4 w-6/12  m-auto">
            <div className="flex items-center justify-around my-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <button className="px-6 py-1 mt-2 font-semibold text-green-600 border border-gray-200 rounded-md bg-white shadow-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h1 className="text-2xl font-semibold mt-20">Looks like your cart is empty. Please add items to proceed!!!</h1>}
            <div className="">
                {cartItems.map((items) => (
                    <div key={items.card.info.id} className="flex justify-between border-b-2 px-2 py-4">
                        <div className="text-left w-9/12">
                            <h2 className="text-lg">{items.card.info.name}</h2>
                            <p className="text-md">₹ {items.card.info.price / 100 || items.card.info.defaultPrice / 100}</p>
                            <p className="text-sm text-gray-400 py-4">{items.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            {items.card.info.imageId ? 
                            <>
                                <div className="absolute">
                                    <button className="px-6 py-1 mx-4 my-20 font-semibold text-red-700 border border-red-700 rounded-md bg-white shadow-lg" onClick={handleRemoveItem}>REMOVE</button>
                                </div>
                                <img className="w-full h-24 rounded-lg" src={CDN_IMG+items.card.info.imageId}/>
                            </> : 
                                <button className="px-6 py-1 font-semibold text-red-700 border border-red-700 rounded-md bg-white shadow-lg" onClick={handleRemoveItem}>REMOVE</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cart;