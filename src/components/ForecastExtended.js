import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 100,
    weatherState: "normal",
    wind: "normal",
    humidity: 10,
}
*/
const api_key = "217639f6498625408c6559d4d182dabb";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData : null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity(city){
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => data.json()
        ).then(weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({
                forecastData
            });
        })
    }

    renderProgress() {
        return "Cargando pronóstico extendido";
        //return days.map( (day, index) => (<ForecastItem key={index} data={data} weekDay={day} hour={13}></ForecastItem>) );
    }

    renderForescastItemDays(forecastData) {
        return forecastData.map((forecast, index) => (
            <ForecastItem 
                key={index} 
                data={forecast.data} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour}>
            </ForecastItem>
        ));
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forescast-title">Pron&oacute;stico Extendido para {city} </h2>
                { forecastData ?
                 this.renderForescastItemDays(forecastData):
                 this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;