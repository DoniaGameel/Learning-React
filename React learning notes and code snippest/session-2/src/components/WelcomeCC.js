import React from "react";
class WelcomeCC extends React.Component {
  state = {
    firstName: "Ahmed",
    lastName: "Naser",
  };

  //another way to use state
  // constructor() {
  //   super(this.props);
  //   this.state = {
  //     firstName: "Ahmed",
  //     lastName: "Naser",
  //   };

  //   this.changeName = this.changeName.bind(this);
  // }

  // changeName() {
  //   // this function isn't bind to 'this' ==> bind it in the constructor
  //   // or using arrow function we won't need to bind
  //   this.setState({ firstName: "Donia" });
  // }

  changeName = () => {
    this.setState({ firstName: "Donia" });
  };
  render() {
    console.log(`state ${this.state}`);
    return (
      <>
        <h1>Hello Class Component, {this.props.name}</h1>
        <h2>
          Created by {this.state.firstName} {this.state.lastName}
        </h2>
        <button
          onClick={
            this.changeName
            /*() => {
            this.setState({ firstName: "Donia" });
          }
            */
          }
        ></button>
      </>
    );
  }

  // the function that is called when we update
  componentDidMount() {
    this.setState({
      lastName: "Gameel",
    });
  }
}

export default WelcomeCC;
