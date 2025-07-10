import { Component } from 'react';
import UserListItem from './UserListItem';

const usersData = [
  { id: 1, firstName: 'Test', lastName: 'Testovych' },
  { id: 2, firstName: 'John', lastName: 'Dou' },
  { id: 3, firstName: 'Jane', lastName: 'Dove' },
];

export default class UsersList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: usersData.map(u => ({ ...u, isSelected: false })),
    };
  }

  selectUser = id => {
    const { users } = this.state;
    const foundIndex = users.findIndex(u => u.id === id);

    const newUsers = [...users];

    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  mapUser = u => {
    const { isLight } = this.props;
    return (
      <UserListItem
        key={u.id}
        user={u}
        selectUser={this.selectUser}
        isLight={isLight}
      />
    );
  };

  render () {
    const { users } = this.state;

    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
