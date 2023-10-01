import { Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import "./styles/index.scss";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О странце</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
      <button type="button" onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App