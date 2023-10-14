import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Welcome to React')}</h1>
}

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
          <MyComponent />
        </div>
      </Suspense>
    </div>
  )
}

export default App