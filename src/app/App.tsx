import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import "./styles/index.scss";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppLink to={'/'} theme={AppLinkThemes.SECONDARY}>На главную</AppLink>
      <AppLink to={'/about'} theme={AppLinkThemes.SECONDARY}>О странце</AppLink>
      <AppRouter />
      <button type="button" onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App