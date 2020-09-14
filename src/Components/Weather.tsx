import React from 'react';

let kelvinTemp: any;
export interface WeatherProps {
    weatherURL: string
    latitude: number
    longitude: number
}
export interface WeatherState {
    weatherInformation: any
    tempConversion: any
    displayedTemp: any
}
class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
    super(props);
        this.state = { weatherInformation: 0, tempConversion: "k", displayedTemp: 'Kelvin'};
}
componentDidMount() {
    
    fetch(this.props.weatherURL, {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': "application/json",
        }
    })
        .then(res => res.json())
        .then((json) => {
        this.setState({ weatherInformation: json.main.temp })
        console.log(this.state.weatherInformation);
        kelvinTemp = json.main.temp;
        
});

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
                   
        {this.state.weatherInformation !== '' ? (<div><h2>Temperature in Your Area: {this.state.weatherInformation} {this.state.displayedTemp}</h2> <button onClick={this.toCelsius}>Celsius</button><button onClick={this.toFahrenheit}>Fahrenheit</button><button onClick={this.toKelvin}>Kelvin</button></div>) : <></> }
        <h1>Weather API lat: {this.props.latitude} and lon: {this.props.longitude}</h1>    
                </div>
            </>
        );
    }
}
export default Weather;