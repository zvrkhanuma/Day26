import React from "react";
import axios from "axios";
class DeleteRequest extends React.Component {
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
      .post("https://reqres.in/api/articles", { title: 'Simple DELETE Request' })
      .then(response => this.setState({ postId: data.id }));
  }
  render() {
    const { status } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple DELETE Request</h5>
        <div className="card-body">Post Id: {postId}</div>
      </div>
    );
  }
}
export default DeleteRequest;