import { Component } from "react";

const usersData = [
  { id: 1, firstName: "Test", lastName: "Testovych" },
  { id: 2, firstName: "John", lastName: "Dou" },
  { id: 3, firstName: "Jane", lastName: "Dove" },
];

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);

    const newUsers = [...users];

    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  mapUser = (u, i) => {
    const inlineStyles = {
      backgroundColor: u.isSelected ? "yellow" : "transparent",
    };

    return (
      <li key={u.id} style={inlineStyles} onClick={() => this.selectUser(u.id)}>
        {u.firstName} {u.lastName}
      </li>
    );
  };

  render() {
    const { users } = this.state;

    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
