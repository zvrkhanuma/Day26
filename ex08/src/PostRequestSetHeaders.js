import React from "react";
import axios from "axios";
class PostRequestSetHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: null
    };
  }
  componentDidMount() {
    // POST request using axios with set headers
    const article = { title: "React POST Request Example" };
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar"
    };
    axios
      .post("https://reqres.in/api/articles", article, { headers })
      .then(response => this.setState({ articleId: response.data.id }));
  }
  render() {
    const { articleId } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POST Request with Set Headers</h5>
        <div className="card-body">Article Id: {articleId}</div>
      </div>
    );
  }
}
export default PostRequestSetHeaders;