import { ThemeContext } from '../../contexts';
import CONSTANS from '../../constants';

const { LIGHT, DARK, PINK } = CONSTANS.THEME;

function ThemeSwitcher () {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const changeTheme = ({ target: { value } }) => {
          setTheme(value);
        };

        return (
          <select value={theme} onChange={changeTheme}>
            {theme}
            <option value={LIGHT}>Light</option>
            <option value={DARK}>Dark</option>
            <option value={PINK}>Pink</option>
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemeSwitcher;
