import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      img: "",
    };
  }

  async componentDidMount() {
    console.log("It will be present before parent's CDM console");

    const JSONdata = await fetch("https://api.github.com/users/PHKhande");
    const profile = await JSONdata.json();

    this.setState({
      img: profile?.avatar_url,
      name: profile?.login,
    });
    console.log("It will be present after parent's CDM console");
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.name}</h1>
        <img src={this.state.img} />

        {/* setting state */}
        {/* <button
          style={{ backgroundColor: "gold" }}
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Click
        </button> */}
      </div>
    );
  }
}

export default Profile;
