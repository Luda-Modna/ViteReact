import { ThemeContext } from "../../contexts";
import CONSTANS from "../../constants";
import classNames from "classnames";
import styles from "./Footer.module.sass";

const { LIGHT, DARK, PINK } = CONSTANS.THEME;

function FooterUserPage() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <footer
            className={classNames({
              [styles.lightTheme]: theme === LIGHT,
              [styles.darkTheme]: theme === DARK,
              [styles.pinkTheme]: theme === PINK,
            })}
          >
            Footer
          </footer>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default FooterUserPage;
