import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('Главная')}</h1>
      <p>{t('Описание страницы')}</p>
      <p>{t('Текст', { ns: 'main' })}</p>
    </div>
  );
};

export default MainPage;
