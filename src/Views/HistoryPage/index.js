import React, { Component } from 'react'
import { connect } from "react-redux";

import Pic from '../../Components/Pic'
import { deletePic } from '../../redux/pics/actions'


class History extends Component {
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deletePic(id));
  }
  render () {
    const { pics } = this.props.picsReducer;
    if (pics.length > 0) {
    return ( 
    <div>
      <h1>History</h1>
      <div>
        {pics.map((p, idx) => (
          <React.Fragment key={p.id}>
            <Pic key={p.id+idx} id={p.id} url={p.url} loading={p.loading} error={p.error}/>
            <p>{p.name} </p>
            <p>{p.time} </p>
            <button className="btn btn-danger mb-5" onClick={() => this.handleDelete(p.id)}>Delete</button>         
          </React.Fragment>
        ))}
      </div>
    </div>)
  }
  else {
    return (
      <>
      <h1>Nothing to show</h1>
      </>
    )

  }
  }
}
 

export default connect((state) => {
  return state;
})(History);