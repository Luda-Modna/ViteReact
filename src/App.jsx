import { Component } from "react";
import UsersList from "./components/UserListTask";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UsersList/>;
  }
}

export default App;
