import React from "react";

export const NumberButton = (props) => {
  let className ="";
  if(props.number === "0"){
    className = "numberButton0"
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`numberButton ${className}`}> {props.number}  </button>
    </>
  );
};
