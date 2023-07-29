import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(
      "This method only runs once like if useEffect has no dependencies and we can async on these methods"
    );
  }

  componentDidUpdate() {
    console.log(
      "This method will run after every render except the first time, where componentDidMount will run"
    );
  }

  componentWillUnmount() {
    console.log("This method will run just before I exit from this component");
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <h1>About Us </h1>
        <p> Food is Great</p>
        <Profile name={"Prathvi"} />
      </div>
    );
  }
}

export default About;
