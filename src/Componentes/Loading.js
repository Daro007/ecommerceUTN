import React from "react";

function Loading(props) {
  return (
    <div id="loading" className="lds-ring" style={props.style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
