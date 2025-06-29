import React from 'react';
import { CDN_URL } from '../utils/constants';

const ResCard = (props) => {
    const { resName, cuisine, rating, cost, imageId } = props;
    return (
        <div className="m-4 p-4 bg-gray-200 h-120 w-[250px] rounded-2xl hover:bg-gray-300">
            <img className="rounded-2xl h-60 w-60" src={CDN_URL+imageId} alt="logo" />
            <h2 className='font-bold py-4 text-lg'>{resName}</h2>
            <h3>{cuisine}</h3>
            <h4>{rating}</h4>
            <h4>{cost}</h4>
        </div>
    )
}

export const isOpenRestaurant = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Open</label>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard;