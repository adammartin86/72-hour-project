import React from 'react';
import Button from '@material-ui/core/Button';

let kelvinTemp: any;
export interface WeatherProps {
    weatherURL: string;
    latitude: number;
    longitude: number
}
export interface WeatherState {
    weatherInformation: any;
    tempConversion: any;
    displayedTemp: any
}
class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
    super(props);
        this.state = { weatherInformation: 0, tempConversion: "k", displayedTemp: 'Kelvin'};
}
componentDidUpdate(prevProps: WeatherProps) {
    if ((this.props.latitude !== prevProps.latitude) || (this.props.longitude !== prevProps.longitude)) {
    fetch(this.props.weatherURL)
        .then(res => res.json())
        .then((json) => {
        this.setState({ weatherInformation: json.main.temp })
        console.log(this.state.weatherInformation);
        kelvinTemp = json.main.temp;
        
});
    }
}

toCelsius = () => {
   var celsiusTemp = kelvinTemp - 273.15;
   this.setState({weatherInformation: celsiusTemp})
   this.setState({displayedTemp : "Celsius"})
}

toFahrenheit = () => {
    var fahrenheitTemp = (kelvinTemp*9)/5 - 459.67
    this.setState({weatherInformation: fahrenheitTemp})
    this.setState({displayedTemp : "Fahrenheit"})
}

toKelvin = () => {
    this.setState({weatherInformation: kelvinTemp})
    this.setState({displayedTemp: "Kelvin"})
}

render() {
        return (
            <>
                <div>
                   
        {this.state.weatherInformation !== '' ? (<div>
            <h2>Temperature in Your Area: {this.state.weatherInformation} {this.state.displayedTemp}</h2> <Button onClick={this.toCelsius}>Celsius</Button>
            <Button onClick={this.toFahrenheit}>Fahrenheit</Button>
            <Button onClick={this.toKelvin}>Kelvin</Button>
        </div>) : <></> }
        
                        </div>
            </>
        );
    }
}
export default Weather;