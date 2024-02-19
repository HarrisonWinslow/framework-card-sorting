import React, { useState } from 'react';
import './Content.css';


function RestaurantCard({restaurant}) {

    //Setup for expansion state
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    //Sets string for food categories
    let foodCategories = "(";
    let cats = restaurant.categories;
    for(let i = 0; i < cats.length; i++)
    {
        foodCategories += cats[i];
        if(i < cats.length-1)
        {
            foodCategories += ", ";
        }
    }
    foodCategories += ")";

    //Sets string for grades (whatever those are)
    let grades = "";
    for(let i = 0; i < restaurant.grades.length; i++)
    {
        grades += restaurant.grades[i];
        if(i < restaurant.grades.length-1)
        {
            grades += "|";
        }
    }

    //Sets string for location
    let location = "(" + restaurant.contact.location[0] + ", " + restaurant.contact.location[1] + ")";

    return(
        <div className="restaurant-card" onClick={toggleExpansion}>
            <p className="restaurant-card-header">{restaurant.name}</p>
            <p>{foodCategories}</p>
            <p>{restaurant.stars} stars</p>
            {isExpanded && (
                <div className="restaurant-additional-content">
                    <p>Grades: {grades} </p>
                    <p>Location: {location} </p>
                    <p>Call us at {restaurant.contact.phone} or email at {restaurant.contact.email}</p>
                </div>
            )}
            <div className={`arrow ${isExpanded ? 'up' : 'down'}`}>&#9660;</div>
        </div>
    )
}

export default RestaurantCard;