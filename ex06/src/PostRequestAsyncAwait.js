import React from 'react';
import axios from 'axios';
class PostRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: null
        };
    }
    async componentDidMount() {
        // POST request using axios with async/await
        const article = { title: 'React POST Request Example' };
        const response = await axios.post('https://reqres.in/api/articles', article);
        this.setState({ articleId: response.data.id });
    }
    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Async/Await</h5>
                <div className="card-body">
                    Article Id: {articleId}
                </div>
            </div>
        );
    }
}
export default PostRequestAsyncAwait;