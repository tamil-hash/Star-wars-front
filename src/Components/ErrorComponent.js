import React from "react";

const ErrorComponent = () => {
  return (
    <div className="error-container">
      <i className="fa fa-exclamation-circle fa-5x" aria-hidden="true"></i>
      <h3>Something went wrong! Please refresh the page or try again later.</h3>
    </div>
  );
};

export default ErrorComponent;
