import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App