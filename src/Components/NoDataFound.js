import React from "react";

const NoDataFound = () => {
  return (
    <div className="error-container">
      <i className="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>
      <h3>No data found with the searched query.</h3>
    </div>
  );
};

export default NoDataFound;
