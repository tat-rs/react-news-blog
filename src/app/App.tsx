import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Button } from "shared/ui/Button/Button";
import "./styles/index.scss";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <Button type="button" onClick={toggleTheme}>
        Toggle
      </Button>
    </div>
  )
}

export default App