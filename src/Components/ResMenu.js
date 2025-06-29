import Shimmer from './Shimmer';
import { useState } from 'react';
import useRestaurantMenu from '../utils/useResturantMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useParams } from 'react-router-dom';
import ResCategory from './ResCategory';

function ResMenu() {
    const { resId } = useParams();
    const onlineStatus = useOnlineStatus(); // Always call hooks at the top level
    console.log("online status:", onlineStatus);
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId);
    const toggle = (index) => {
        if (showIndex === index) {
            setShowIndex(null);
        } else {
            setShowIndex(index);
        }
    }
    if (!onlineStatus) {
        return (
            <div>
                <h1>Looks like you are offline</h1>
            </div>
        );
    }

    if (!resInfo) return <Shimmer />;

    const cardInfo = resInfo?.cards[2]?.card?.card?.info || {};
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = cardInfo;
    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') || [];
    console.log("categories:", categories);

    return (
        <div className='text-center'>
            {name && <h1 className='font-bold my-6 text-2xl'>{name}</h1>}
            <p className='font-bold text-lg'>{cuisines.join(", ")}</p>
            {categories.map((category, index) => {
                return <ResCategory 
                            key={index} 
                            data={category?.card?.card} 
                            showItems={index === showIndex ? true : false}
                            setShowIndex={()=> toggle(index)}/>
            })}
        </div>
    );
}

export default ResMenu;
