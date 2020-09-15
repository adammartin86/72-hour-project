import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Grid } from "@material-ui/core";
 
const useStyles = createStyles({
    root: {
      minWidth: 200,
      marginLeft: 20,
      marginRight: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



export interface ZomatoProps {
    latitude: number;
    longitude: number;
    zomatoURL: string;
    zomatoAPIkey: string;
    classes: any
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
        if ((this.props.latitude !== prevProps.latitude) || (this.props.longitude !== prevProps.longitude)){
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
        const{classes} = this.props
        return ( <div>
           <div>
               <h2>Restaurants in Your Area</h2>
               <Grid container spacing={2}>            
               {this.state.zomatoInformation.length > 0 ? (
                   this.state.zomatoInformation.map(
                       (restaurant: any, index: number) => (
                        <Grid item xs={4}>
                        <Card variant="outlined" className={classes.root}>
                        <CardContent className={classes.title}>
                          <Typography variant="h5" component="h2"> {restaurant.restaurant.name} </Typography>
                          <Typography variant="body2" component="p">Cuisine: {restaurant.restaurant.cuisines}</Typography>
                          <Typography variant="body2" component="p">Rating: {restaurant.restaurant.user_rating.aggregate_rating}</Typography>
                          <Typography variant="body2" component="p">Location: {restaurant.restaurant.location.address}</Typography>                          
                          </CardContent>
                          </Card>
                          </Grid>
                          
                       ) 
                   ) 
                       ) : <> </> }
                
                </Grid>   
           </div>
        </div> );
    }
}
 
export default withStyles(useStyles) (Zomato);