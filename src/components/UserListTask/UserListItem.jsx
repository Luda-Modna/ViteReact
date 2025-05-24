import styles from "./UserList.module.css";

function UserListItem(props) {
  const {
    selectUser,
    onDelete,
    user: { id, imgSrc, firstName, lastName, age, isSelected },
  } = props;

  const selectUserStyle = {
    backgroundColor: isSelected ? "#5c979a" : "white",
  };

  return (
    <li
      key={id}
      className={styles.item}
      style={selectUserStyle}
      onClick={() => {
        selectUser(id);
      }}
    >
      <div className={styles.containerUserInfo}>
        <img className={styles.userImg} src={imgSrc} alt={firstName} />
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>Age: {age}</p>
        </div>
      </div>

      <button
        className={styles.buttonDelete}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        Delete user
      </button>
    </li>
  );
}

export default UserListItem;
