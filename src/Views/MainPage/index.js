import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPic } from "../../redux/pics/actions";
import Pic from '../../Components/Pic'

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
        <button
          className="btn btn-primary btn-lg mb-2"
          onClick={() => this.props.dispatch(fetchPic())}
        >
          Show Pic
        </button>

        <Pic url={url} loading={loading} error={error}/>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(Main);
