import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t, i18n } = useTranslation();


  return (
    <div>
      <h1>{t('introduceTxext.title')}</h1>
      <p>{t('introduceTxext.par1')}</p>
      <span>{t('introduceTxext.par2')}</span><span>{t('introduceTxext.par4')}</span><span>{t('introduceTxext.par3')}</span>


    </div>
  )
}

export default Home
