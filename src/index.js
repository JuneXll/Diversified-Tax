import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

i18n
  .use(initReactI18next)//passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  })

  const ballStyle = {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: "#003054",
    marginRight: 10,
    marginTop: '3em',
    animation: "ball .5 ease infinite alternate"
  }

  const text = {
    color: "#003054"
  }

  const loadingMarkup = (
    <div className="loading d-column w-100 text-center">
      <div className="balls d-flex justify-content-center">
        <div className="ball ball1 display-1" style={ballStyle}></div>
        <div className="ball2 display-1" style={ballStyle}></div>
        <div className="ball2 display-1" style={ballStyle}></div>
      </div>
      <span className="display-3" style={text}>Loading</span>
    </div>
  )

ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
      <App />
    </Suspense>,
  document.getElementById('root')
);

{/* <div className='py-4 text-center'>
      <h2 className='display-2'>
        Loading...
        <span className="visually-hidden">Loading...</span>
      </h2>
    </div> */}