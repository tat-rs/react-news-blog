import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync as MainPage } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync as AboutPage } from "./pages/AboutPage/AboutPageAsync";
import { Suspense } from "react";

function App() {
  return (
    <div className="app">
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О странце</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
      
    </div>
  )
}

export default App