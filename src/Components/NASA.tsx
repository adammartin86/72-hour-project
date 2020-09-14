import React, {Component} from 'react';
//page will render before the location is grabbed. The way we had it before would have worked with hard-coded values, but would not have worked with the JS that grabs location from the browser. DidMount is good for a fetch, but not for data that's not done yet/data that doesn't load as fast (page loads before the location)

export interface NASAProps {
    longitude: number;
    latitude: number;
    NASAurl: string;
}
 
export interface NASAState {
    NASAInfo: any
}
 
class NASA extends React.Component<NASAProps, NASAState> {
    constructor(props: NASAProps) {
        super(props);
        this.state = { NASAInfo:Blob  };
    }
    componentDidUpdate(prevProps: NASAProps) {//references whatever the props were previously
        // Typical usage (don't forget to compare props):
        if (this.props.latitude !== prevProps.latitude) {//if property changes, fetch
            fetch(this.props.NASAurl, {
                method: "GET",
                headers: {
                    'Content-Type': 'image/png'
                }
            })
            .then ((res) => res.blob())
            .then ((Blob) => {console.log(Blob);
            this.setState({NASAInfo: URL.createObjectURL(Blob)})})
            console.log("nasapic", this.state.NASAInfo);
        }
      }

    render() { 
        return (<div>
    <h2>NASA Image</h2>
            <img src={this.state.NASAInfo} alt="NASA"/>
        </div>  );
    }
}
 
export default NASA;