import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О странце</Link>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App