import React from "react";


const Pic = ({id, url, loading, error}) => {
  return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error, try again</p>
        ) : (
          <p>
            <img key={id} src={url} alt="pic" />
          </p>
        )}
      </>
    )

}

export default Pic;
