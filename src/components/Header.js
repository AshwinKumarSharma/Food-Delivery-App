import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { store } from "@reduxjs/toolkit";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus()

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between x-5 items-center shadow-lg">
            <div>
                <Link to="/"><img className="w-32 pl-10   cursor-pointer" src={logo} /></Link>
            </div>
            <div>
                <ul className="flex text-xl font-semibold mx-5 items-center">
                    <li className="p-5 m-5 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="p-5 m-5 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="p-5 m-5 cursor-pointer"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className=" cursor-pointer border border-black px-8 m-6 rounded-lg py-1" onClick={() => {
                       (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;