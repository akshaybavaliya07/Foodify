import ItemLists from "./ItemLists";

const RestaurantCategory = ({data, showItems, setIndex}) => {

    const showHide = () => {
        setIndex();
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2">
                <div className="flex justify-between cursor-pointer" onClick={showHide}>
                    <span className="font-bold text-xs">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemLists data={data?.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;