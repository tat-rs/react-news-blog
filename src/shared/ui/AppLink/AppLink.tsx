import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, theme = AppLinkThemes.PRIMARY, to, children, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
