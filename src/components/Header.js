import logo from "../images/logo.png";

const Header = () => (
    <div className="flex justify-between x-5 items-center shadow-lg">
        <div>
            <img className="w-32 cursor-pointer" src={logo} />
        </div>
        <div>
            <ul className="flex text-2xl font-semibold mx-5">
                <li className="p-5 m-5 cursor-pointer">Home</li>
                <li className="p-5 m-5 cursor-pointer">About</li>
                <li className="p-5 m-5 cursor-pointer">Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;