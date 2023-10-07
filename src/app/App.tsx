import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./router/ui/AppRouter";
import "./styles/index.scss";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О странце</Link>
      <AppRouter />
      <button type="button" onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App