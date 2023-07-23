import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./util/Logo.png";

// React.createElement() => obj => HTML(DOM)
// Below line is known as React Element
const heading1 = React.createElement(
  "h1",
  { id: "head1", key: "h1" },
  "Hello World!"
);

// JSX => React.createElement() => obj => HTML(DOM)
// Below line is known as JSX Expression
const heading2 = (
  <h2 id="head2" key="h2">
    Hello World 2!
  </h2>
);

//Name has to be in UpperCamelCase
//Below is a functional component
const Heading3 = function () {
  return (
    <h3 id="head3" key="h3">
      Hello World 3!
    </h3>
  );
};

const Heading4 = function () {
  return (
    <h3 id="head4" key="h4">
      Hello World 4!
    </h3>
  );
};

//Component Composition : Component inside component
const HeadingComponent = () => {
  return (
    <div id="container">
      <img src={logo} />
      <input
        className="input"
        type="text"
        placeholder="Search anything you want..."
      />
      {heading1}
      {heading2}
      <Heading3 />
      {Heading4()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
