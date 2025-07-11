import React from 'react';
import { useState, useEffect } from 'react';
import ResCard, {isOpenRestaurant} from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestCardOpen = isOpenRestaurant(ResCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       
       setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        || []);
        setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        || [])
        console.log(json);
    }

    return resList.length === 0? 
    (<Shimmer />) : (
        <div className="body">
           <div className="search m-4 p-4 flex items-center">
                <div className="search m-4 p-4">
                    <input
                     type="text" 
                     className='border border-solid border-black'
                     placeholder="Search for restaurants" 
                     value={searchText} 
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}/>
                    <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=> {
                        const filteredList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResList(filteredList);
                    }} >Search</button>
                </div>
               
                    <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg" onClick={()=>{
                        const filteredList = resList.filter((res) => res.info.avgRating > 4.2);
                        setResList(filteredList);
                    }}>Top Rated Restaurants</button>
                
           </div>
           <div className="flex flex-wrap"> 
                {filteredResList.map((res, index) => {
                    return (
                        <Link to={"/restaurant/" + res?.info?.id} key={`${res.info.id}-${index}`}> 
                            {res.info.isOpen ? (
                                <RestCardOpen 
                                    key={`${res.info.id}-${index}`}
                                    resName={res.info.name} 
                                    cuisine={res.info.cuisines.join(", ")} 
                                    rating={res.info.avgRating} 
                                    cost={res.info.costForTwo} 
                                    imageId={res.info.cloudinaryImageId}
                                    deliveryTime={res.info.sla.deliveryTime} 
                                />
                            ) : (
                                <ResCard 
                                    key={`${res.info.id}-${index}`}
                                    resName={res.info.name} 
                                    cuisine={res.info.cuisines.join(", ")} 
                                    rating={res.info.avgRating} 
                                    cost={res.info.costForTwo} 
                                    imageId={res.info.cloudinaryImageId}
                                    deliveryTime={res.info.sla.deliveryTime}
                                />
                            )}
                        </Link>
                    )
                })}
                
           </div>
        </div>
    )
}

export default Body;