import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Heading One")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
