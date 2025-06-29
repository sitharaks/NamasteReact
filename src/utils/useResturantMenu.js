import React from "react";
import { useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = React.useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.951120136018453&lng=77.50633715842572&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data || null);
    };
    
    return resInfo;
    }

export default useRestaurantMenu;