import { Component } from "react";
import ThemeButton from "./components/ThemeButton";
import UsersList from "./components/UsersList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: true,
    };
  }

  setTheme = () => {
    const { isLight } = this.state;
    this.setState({ isLight: !isLight });
  };

  render() {
    const { isLight } = this.state;
    return (
      <>
        <ThemeButton isLight={isLight} changeTheme={this.setTheme} />
        <UsersList />
      </>
    );
  }
}

export default App;
