import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return "Loading...";
    
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    return(
        <div className="text-center">
            <h6 className="font-bold mt-3">{name}</h6>
            <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
            <p className="text-gray-600 text-sm">{costForTwoMessage}</p>
            { categories.map((category, index) => 
                    <RestaurantCategory key={category?.card?.card?.title} 
                    data = {category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setIndex ={() => setShowIndex(index)}
                />)
            }
        </div>
    );
}

export default RestaurantMenu;