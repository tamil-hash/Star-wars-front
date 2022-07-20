import React from "react";

const SpeciesCard = ({
  title = "",
  count = 82,
  icon = "",
  loading = false,
}) => {
  return (
    <div className="species-card">
      {icon}
      <h4>{title}</h4>
      {loading ? (
        <i className="fa fa-spinner" aria-hidden="true"></i>
      ) : (
        <h2>{count}</h2>
      )}
    </div>
  );
};

export default SpeciesCard;
