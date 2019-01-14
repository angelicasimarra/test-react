import React, { Component } from 'react';
import transformWeather  from "../../services/transformWeather";
import { location, api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from "./../WeatherData";
import './styles.css';

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Medellin",
            data: null
        }
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState({
                city: location,
                data: newWeather
            })
        }).catch( error => {
            console.log(`Error: ${error}`);
        });
    }

    render(){
        const { city, data } = this.state;
        return (
            <div className="WeatherLocationCont">
                <Location city={city}/>
                { data ? <WeatherData data={data}></WeatherData> : 'cargando....' }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;