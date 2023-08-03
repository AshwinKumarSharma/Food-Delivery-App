import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="flex justify-between x-5 items-center shadow-lg">
            <div>
                <Link to="/"><img className="w-32 cursor-pointer" src={logo} /></Link>
            </div>
            <div>
                <ul className="flex text-2xl font-semibold mx-5">
                    <li className="p-5 m-5 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="p-5 m-5 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="p-5 m-5 cursor-pointer">Cart</li>
                    <button className=" cursor-pointer border border-black px-8 m-6 rounded-lg py-1" onClick={() => {
                       (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;