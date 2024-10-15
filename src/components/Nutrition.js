import React from "react";

function Nutrition({ nutrition }) {
  return (
    <div className="">
      <h3 className="title lists-title mt-5">Nutrition</h3>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul className="d-flex flex-column gap-3 w-100 p-0">
        {Object.entries(nutrition).map(([key, value]) => (
          <li className="d-flex w-100 justify-content-between border-bottom">
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <p className="nutri-value fw-bold">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nutrition;
