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

    componentDidUpdate(prevProps: ZomatoProps) {
        if (this.props.latitude !== prevProps.latitude || (this.props.longitude !== prevProps.longitude)){
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
}

    render() { 
        return ( <div>
           <div>
               <h1>Restaurants in Your Area</h1>
               <ul>
               {this.state.zomatoInformation.length > 0 ? (
                   this.state.zomatoInformation.map(
                       (restaurant: any, index: number) => (
                          <li> <h3> {restaurant.restaurant.name} </h3>
                          <p>Cuisine: {restaurant.restaurant.cuisines}</p>
                          <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
                       <p>Location: {restaurant.restaurant.location.address}</p>
                          </li>
                          
                       ) 
                   ) 
                       ) : <> </> }
                </ul>
               
           </div>
        </div> );
    }
}
 
export default Zomato;