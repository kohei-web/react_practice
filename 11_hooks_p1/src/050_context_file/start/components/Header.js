import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const [ theme, setTheme ] = useTheme();
    const changeTheme = (e) => setTheme(e.target.value)
    const THEMES = ['light', 'dark', 'red'];


    return (
        <header className={`content-${theme}`}>
        {/* mapとjsxを使用してラジオボタンの作成 */}
        {THEMES.map(_theme => {
          return (
            <label>
              <input
                type="radio"
                key={_theme}
                value={_theme}
                // 左辺のthemeはuseStateのthemeを参照
                checked={theme === _theme}
                onChange={changeTheme}
              />
                {_theme}

            </label>
          )
        })}
      </header>
    )
};

export default Header;
