import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button type="button" onClick={onToggle}>Toggle</Button>
      <ThemeSwitcher className={classNames(cls.switcher, {}, [])} />
    </div>
  )
}