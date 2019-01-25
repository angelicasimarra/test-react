import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import './styles.css';

const WeatherData = ( { data } ) => {
    const { temperature, weatherState, wind, humidity } = data;
    return (<div className="weatherDataCont">
                <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
                <WeatherExtraInfo wind={wind} humidity={humidity}/>
            </div>);
};

WeatherData.proptypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
    }),
};


export default WeatherData;
