import userIcon from "./userIcon.png";
import logoImg from "./logoImg.jpeg";
import styles from "./Header.module.css";

function Header(props) {
  const { isLogin } = props;

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logoImg} alt="logo" />
      {isLogin ? (
        <img className={styles.userImg} src={userIcon} alt="userPhoto" />
      ) : (
        <div>
          {" "}
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  );
}

export default Header;
