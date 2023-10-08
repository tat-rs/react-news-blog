import { AppRoutes, RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink"
import cls from './Navbar.module.scss'

export const NavLinks = [
  {
    text: 'На главную',
    path: RoutePaths.main
  },
  {
    text: 'О странице',
    path: RoutePaths.about
  }
]

export type NavbarProps = {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
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
  )
}

export default Navbar