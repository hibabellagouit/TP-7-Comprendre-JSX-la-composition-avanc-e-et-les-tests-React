import React from "react";

function withTimestamp(Component) {
  return function Wrapper(props) {
    const timestamp = new Date().toLocaleTimeString();
    return (
      <div>
        <p>Rendu à : {timestamp}</p>
        <Component {...props} />
      </div>
    );
  };
}

export default withTimestamp;
