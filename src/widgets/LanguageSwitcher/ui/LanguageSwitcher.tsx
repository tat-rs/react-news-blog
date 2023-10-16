import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";

export interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation();
  
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button type="button" onClick={onToggle} className={classNames(cls.button, {}, [className])}>
      {t('Язык')}
    </Button>
  )
}