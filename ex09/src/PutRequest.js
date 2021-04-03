import React from "react";
import axios from "axios";
class PutRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: null
    };
  }
  componentDidMount() {
    // POST request using axios with set headers
    const { postID } = this.state;
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar"
    };
    axios
      .post("https://reqres.in/api/articles", { title: 'React PUT Example' })
      .then(response => this.setState({ postId: data.id }));
  }
  render() {
    const { postId } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple PUT Request</h5>
        <div className="card-body">Post Id: {postId}</div>
      </div>
    );
  }
}
export default PutRequest;