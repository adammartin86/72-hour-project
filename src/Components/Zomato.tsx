import React, {Component} from 'react';

export interface ZomatoProps {
    latitude: number;
    longitude: number;
    zomatoURL: string;
    zomatoAPIkey: string
}
 
export interface ZomatoState {
    zomatoInformation: any;
    
}

 
class Zomato extends Component<ZomatoProps, ZomatoState> {
    constructor(props: ZomatoProps) {
        super(props);
        this.state = { zomatoInformation:  []};
    }

    componentDidMount() {
        console.log(`${this.props.zomatoURL}lat=${this.props.latitude}&lon=${this.props.longitude}`)
        fetch(`${this.props.zomatoURL}lat=${this.props.latitude}&lon=${this.props.longitude}`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'user-key': this.props.zomatoAPIkey
        }})
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            let zomatoRestaurantArray: [] = json.restaurants;
            this.setState({zomatoInformation: zomatoRestaurantArray})  
            console.log(this.state.zomatoInformation)
        })
    }

    render() { 
        return ( <div>
            <h1>Zomato Element</h1>
            <h2>Latitude: {this.props.latitude}</h2>
            <h2>Longitude: {this.props.longitude}</h2>
            {/* <h3>{this.state.zomatoInformation.map}</h3> */}
           <div>
               <h1>Restaurants in Your Area</h1>
               {this.state.zomatoInformation.length > 0 ? (
                   this.state.zomatoInformation.map(
                       (restaurant: any, index: number) => (
                          <p> {restaurant.restaurant.name} </p>
                       ) 
                   ) 
                       ) : <> </> }
               
           </div>
        </div> );
    }
}
 
export default Zomato;