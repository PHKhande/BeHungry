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
      <div className="flex border border-purple-800 justify-center m-3 rounded-md">
        <h1 className="p-2 border border-purple-800 m-2">Profile Class Component</h1>
        <h1 className="p-2 border border-purple-800 m-2">{this.props.name}</h1>
        <h1 className="p-2 border border-purple-800 m-2">{this.state.name}</h1>
        <img className="w-32 m-2" src={this.state.img} />

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
