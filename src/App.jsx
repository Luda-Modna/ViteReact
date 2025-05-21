import { Component } from "react";
import StopWatch from "./StopWatch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>
          {isVisible ? "Unmount" : "Mount"}
        </button>
        {isVisible && <StopWatch />}
      </>
    );
  }
}

export default App;
