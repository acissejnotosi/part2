import React from "react";

const errorStyle = {
  color: "red",
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div style={errorStyle}>{message}</div>;
};

export default ErrorNotification;
