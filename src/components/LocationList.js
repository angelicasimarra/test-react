import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation'

const LocationList = ({ cities }) => {

    const handleWeatherLocationClick = ({ city, onSelectLocation }) => {
        console.log("handleWeatherLocationClick");
        onSelectLocation(city);
    }

    const strToComponent = cities => (
        cities.map
        ( (city, index) => 
            (
            <WeatherLocation 
                city={city}
                key={index}
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) } />
            )
        )
    );
    return (
        <div>
            { strToComponent (cities) }
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectLocation: PropTypes.func,
}

export default LocationList;