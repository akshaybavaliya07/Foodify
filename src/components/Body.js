import { useState, useEffect } from 'react';
import RestaurantCard, {withPromotedLable} from './RestaurantCard';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { SWIGGY_API } from '../utils/constants';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const topRestaurant = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.info.avgRating > 4.4
    });
    setFilteredRestaurant(filteredList);
  }

  const addSerchText = (e) => {
    setSearchText(e.target.value);
  }

  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

  const showFilteredRest = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredList);
  }

  useEffect( ()=> {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>Oops! You are offline. 😔</h1>
        <h1>Please check your internet connection. 🌐</h1>
      </div>
    );
  }


  return filteredRestaurant == [] ? "Loading..." : (
    <div className="body">
      <div className="search-container">
        <input type="text" className='srcInp' placeholder="Search Food or Restaurant" value={searchText} onChange={addSerchText}/>
        <button className='srcBtn' onClick={showFilteredRest}>Search</button>
        <button className="top" onClick={topRestaurant}>Top Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) =>
          <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id} className='resLink'>
            {
              restaurant?.info?.veg ? <RestaurantCard resData={restaurant?.info}/> : <RestaurantCardPromoted resData={restaurant?.info} />
            }
          </Link>
        )}
      </div>
    </div>
  );
};

export default Body;