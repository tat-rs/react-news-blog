import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light-icon.svg';
import DarkIcon from 'shared/assets/icons/theme-dark-icon.svg';
import cls from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {
          theme === Theme.DARK ? <DarkIcon /> : <LightIcon />
        }
    </Button>
  );
};

export default ThemeSwitcher;
