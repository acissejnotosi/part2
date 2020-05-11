import React from "react";

const successStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const errorStyle = {
  color: "red",
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const successNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div style={successStyle}>{message}</div>;
};

const errorNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div style={errorStyle}>{message}</div>;
};

export default {
    successNotification,
    errorNotification
}