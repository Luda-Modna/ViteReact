import React, { Component } from "react";
import CONSTANS from "./constants.js";
import ThemeContext from "./contexts/themeContext.js";
import UserPage from "./pages/UserPage";
import styles from "./App.module.sass";
import classNames from "classnames";

const { LIGHT, DARK, PINK } = CONSTANS.THEME;
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: PINK,
    };
  }

  setTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  componentDidMount() {
    const storageTheme = window.localStorage.getItem("theme");

    if (storageTheme) {
      this.setState({ theme: storageTheme });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme } = this.state;

    if (theme !== prevState.theme) {
      window.localStorage.setItem("theme", theme);
    }
  }

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
        <div className={pageClassName}>
          <UserPage />
        </div>
      </ThemeContext.Provider>
    );
  }
}
