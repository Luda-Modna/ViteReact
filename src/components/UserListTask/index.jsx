import { Component } from 'react';
import UserListItem from './UserListItem';

const usersData = [
  {
    id: 1,
    firstName: 'Олена',
    lastName: 'Шевченко',
    age: 24,
    imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    firstName: 'Іван',
    lastName: 'Ковальчук',
    age: 28,
    imgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    firstName: 'Марія',
    lastName: 'Гнатюк',
    age: 31,
    imgSrc: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    firstName: 'Артем',
    lastName: 'Данилюк',
    age: 26,
    imgSrc: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    firstName: 'Софія',
    lastName: 'Мельник',
    age: 22,
    imgSrc: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
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

  deleteUser = id => {
    const { users } = this.state;
    const newUsers = users.filter(u => u.id !== id);
    this.setState({ users: newUsers });
  };

  mapUsers = u => {
    return (
      <UserListItem
        key={u.id}
        user={u}
        selectUser={this.selectUser}
        onDelete={this.deleteUser}
      />
    );
  };

  render () {
    const { users } = this.state;

    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}
