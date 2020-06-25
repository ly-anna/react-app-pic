import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPic } from "../../redux/pics/actions";

class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPic());
  }

  render() {
    const { url, loading, error } = this.props.picsReducer;

    return (
      <div>
        <h1>Are you ready?</h1>
        <div>
          <button
            className="btn btn-primary btn-lg mb-2"
            onClick={() => this.props.dispatch(fetchPic())}
          >
            Show Pic
          </button>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error, try again</p>
          ) : (
            <p>
              <img src={url} alt="pic" />
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(Main);
