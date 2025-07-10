function UserListItem (props) {
  const {
    isLight,
    selectUser,
    user: { id, isSelected, firstName, lastName },
  } = props;
  const inlineStyles = {
    backgroundColor: isSelected
      ? isLight
        ? 'yellow'
        : 'violet'
      : 'transparent',
  };
  return (
    <li style={inlineStyles} onClick={() => selectUser(id)}>
      {firstName} {lastName}
    </li>
  );
}

export default UserListItem;
