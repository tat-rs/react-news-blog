import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button
        type="button"
        onClick={onToggle}
        className={classNames(cls.collapsedBtn, {}, [])}>
         {collapsed ? t('Открыть') : t('Свернуть')}
      </Button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher className={classNames(cls.switcher, {}, [])} />
        <LanguageSwitcher className={cls.languageSwitcher} />
      </div>
      
    </div>
  )
}