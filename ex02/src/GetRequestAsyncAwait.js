import React from 'react';
import axios from 'axios';
class GetRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalReactPackages: null
        };
    }
    async componentDidMount() {
        // GET request using axios with async/await
        const response = await axios.get('https://api.npms.io/v2/search?q=react');
        this.setState({ totalReactPackages: response.data.total })
    }
    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                    Total packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}
export default GetRequestAsyncAwait;