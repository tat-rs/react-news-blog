import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App