import Profile from "./Profile";
import { Component } from "react";
import UserContext from "../../util/UserContext";

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
      <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
        <h1 className="p-2">About Us </h1>
        <p className="p-2"> Food is Great</p>
        <Profile name={"Prathvi"} />

        <div className="flex border border-purple-800 justify-center m-3 rounded-md">
          <UserContext.Consumer>
            {({ user }) => (
              <h4 className="italic p-2">
                Current User {user.name} - {user.email}
              </h4>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
