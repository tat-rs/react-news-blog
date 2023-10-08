import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import "./styles/index.scss";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button type="button" onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App