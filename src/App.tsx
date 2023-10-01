import { Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync as MainPage } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync as AboutPage } from "./pages/AboutPage/AboutPageAsync";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

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