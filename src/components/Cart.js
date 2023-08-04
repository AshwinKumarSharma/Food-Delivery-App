import { useDispatch, useSelector } from "react-redux";
import MenuListItems from "./MenuListItems";
import { store } from "@reduxjs/toolkit";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center p-4 w-6/12  m-auto">
            <div className="flex items-center justify-around my-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <button className="px-6 py-1 mt-2 font-semibold text-green-600 border border-gray-200 rounded-md bg-white shadow-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h1 className="text-2xl font-semibold mt-20">Looks like your cart is empty. Please add items to proceed!!!</h1>}
            <div className="">
                <MenuListItems itemsList={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;