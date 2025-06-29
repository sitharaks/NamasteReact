import React, { use } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector(store => store.cart.items);
    const onlineStatus = useOnlineStatus(); 
    return(
        <div className="flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-50 lg:bg-purple-50"> 
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                         <Link to="/cart">Cart ({cart.length} items )</Link> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;