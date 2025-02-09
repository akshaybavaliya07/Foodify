import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData;
    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="lable">Non-Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;