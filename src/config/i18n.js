import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'You have won!': 'You have won!',
      'Your moves': 'Your moves',
      'Your time': 'Your time',
      'Share result': 'Share result',
      s: 's',
      'Top-10': 'Top-10',
      Moves: 'Moves',
      Name: 'Name',
      Score: 'Score',
      Champion: 'Champion',
      Total: 'Total',
      Time: 'Time',
      'New Game': 'New Game',
      'Made by Barkhatov Andrew': 'Made by Barkhatov Andrew',
      'Barkhatov Andrew': 'Barkhatov Andrew',
    },
  },
  ru: {
    translation: {
      'You have won!': 'Ты победил!',
      'Your moves': 'Твои ходы',
      'Your time': 'Твоё время',
      'Share result': 'Поделиться',
      s: 'с',
      'Top-10': 'Топ-10',
      Name: 'Имя',
      Score: 'Очки',
      Champion: 'Чемпион',
      Total: 'Всего',
      Moves: 'Ходы',
      Time: 'Время',
      'New Game': 'Новая Игра',
      'Made by Barkhatov Andrew': 'Сделал Бархатов Андрей',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
