import React from 'react';
import axios from 'axios';
class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalReactPackages: null
        };
    }
    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => this.setState({ totalReactPackages: response.data.total }));
    }
    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Total packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}
export default GetRequest;