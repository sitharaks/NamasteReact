import {CDN_URL} from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items, onItemClick }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div >
                {items.map((item, index) => {
                    return (
                        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span>{item.card.info.name}</span>
                                    <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                                </div>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                            <div className="w-2/12 ">
                                <div className="justify-left items-right">
                                    <button className="bg-black text-white shadow-lg rounded-lg p-2 mx-16" onClick={()=>handleAddItem(item)}>Add +</button>
                                    <img key ={index} src={CDN_URL + item.card.info.imageId} className="w-50" />
                                </div>
                            </div>
                        </div>
                    
                    );
                })}
          
           
        </div>
    );
}

export default ItemList;