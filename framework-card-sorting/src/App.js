
import './App.css';
import React, {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantsDataPartial from './restaurants-partialData.json';
import restaurantsDataFull from './restaurants-fullData.json';


function App() {
  const [restaurants, setRestaurants] = useState([])
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setRestaurants(restaurantsDataPartial);
  }, []);


  // Sorting function
  const sortRestaurants = (key, order) => {
    console.log("Sorting restaurants");
    let o = order;
    if(key === "stars")
    {
      if(o === 'asc') o = 'desc';
      else o = 'asc';
    }
    const sortedRestaurants = [...restaurants].sort((a, b) => {
      if (a[key] < b[key]) return o === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return o === 'asc' ? 1 : -1;
      return 0;
    });
    setRestaurants(sortedRestaurants);
  };

  // Handle tab click
  const handleTabClick = (key) => {
    console.log('Tab clicked:', key);
    if (sortBy === key) {
      console.log('Toggle sorting order');
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
    else {
      console.log('Change sorting key');
      setSortBy(key);
      setSortOrder('asc');
    }
    sortRestaurants(key, sortOrder);
  };

  //Start with
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Restaurants near me!
        </p>
      </header>
      <div className="tabs">
        <button className={`button ${sortBy === 'name' ? 'active' : ''}`} onClick={() => handleTabClick('name')}>Sort by Name</button>
        <button className={`button ${sortBy === 'categories' ? 'active' : ''}`} onClick={() => handleTabClick('categories')}>Sort by Food Category</button>
        <button className={`button ${sortBy === 'stars' ? 'active' : ''}`} onClick={() => handleTabClick('stars')}>Sort by Stars</button>
        {/* <button className={sortBy === 'name' ? 'active' : ''} onClick={() => handleTabClick('name')}>Sort by Name</button>
        <button className={sortBy === 'categories' ? 'active' : ''} onClick={() => handleTabClick('categories')}>Sort by Food Category</button>
        <button className={sortBy === 'stars' ? 'active' : ''} onClick={() => handleTabClick('stars')}>Sort by Stars</button> */}
      </div>
      <p className="App-body">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </p>
    </div>
  );
}

export default App;
