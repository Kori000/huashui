import { changeLanguage } from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Home from './components/Home'


function App () {
  const { t, i18n } = useTranslation();
  function changeLanguage (lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <nav className='navigation '>
        <button
          type="button"
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('zh')}
        >
          中文
        </button>
      </nav>

      <main>
        <p>{t('hellow')}</p>
        {
          t('navLinks', { returnObjects: true }).map((item, index) => (
            <h1 key={index}>{item.title}</h1>
          ))
        }
      </main>

      <div>
        <Home />
      </div>
    </div >
  )
}

export default App
