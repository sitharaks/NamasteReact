import React, { useState } from 'react';
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {


const handleClick = () => {
    setShowIndex();
};
    return (
        <div className="res-category"> 
           <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg justify-between ">
                <div className="flex justify-between p-4 cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span className="float-right">⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards} onItemClick={(item) => console.log(item)} />}
           </div>
          
         </div>
    );
};

export default ResCategory;