import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";

export type NavbarProps = {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();

  const NavLinks = [
    {
      text: t('На главную'),
      path: RoutePaths.main
    },
    {
      text: t('О странице'),
      path: RoutePaths.about
    }
  ]

  return (
    <div>
      <nav className={classNames(cls.navbar, {}, [className])}>
        <ul className={classNames(cls.list)}>
          {
            NavLinks.map(({text, path}) => (
            <li key={path} className={classNames(cls.item)}>
              <AppLink to={path} theme={AppLinkThemes.SECONDARY}>{text}</AppLink>
            </li>
            ))
          }
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar