import React, { Component } from 'react';
import Location from './Location';
import WeatherData from "./../WeatherData";
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

const data = {
    temperature: 29,
    weatherState: SUN,
    humidity: 23,
    wind: '15 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Medellin",
            data: data
        }
    }

    handleUpdateClick = () => {
        this.setState({
            city: "Cartagena de Indias"
        })
        console.log("actualizado");
    }

    render(){
        const { city, data } = this.state;
        return (
            <div className="WeatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;