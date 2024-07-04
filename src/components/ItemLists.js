import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemLists = ({data}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      dispatch(addItem(item));
    }
    return(
        <div>
            {data.map((item) => (
                <div className="text-left border-gray-200 border-b-2 flex justify-between">
                    <div className="mt-3 w-9/12">
                        <p className="text-xs font-bold">{item?.card?.info?.name}</p>
                        <p className="text-xs">₹{item?.card?.info?.price/100}</p>
                        <p className="text-xs font-light text-gray-500">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={CDN_URL + item?.card?.info?.imageId} alt="" className="w-24 content-center my-10 float-end border rounded-md" />
                        <div className="relative bottom-14 left-6">
                            <button 
                                className="p-1 m-auto shadow-2xl bg-green-600 text-white border rounded-lg text-xs w-14"
                                onClick={() => handleAddItem(item)}>ADD+</button>
                        </div>
                    </div>
                </div> 
                )
            )}
        </div>
    );
};

export default ItemLists