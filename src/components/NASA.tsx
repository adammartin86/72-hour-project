import React from 'react';

export interface NASAProps {
    longitude: number;
    latitude: number;
    NASAurl: string;
}
 
export interface NASAState {
    NASAInfo: any
}
 
class NASA extends React.Component<NASAProps, NASAState> {
    constructor(props: NASAProps) {
        super(props);
        this.state = { NASAInfo:Blob  };
    }

componentDidMount() {
    fetch(this.props.NASAurl)
    .then ((res) => res.blob())
    .then ((blob) => {console.log(blob);
    this.setState({NASAInfo: Blob})})
}
    render() { 
        return (<div>
            <p>Blob</p>
        </div>  );
    }
}
 
export default NASA;