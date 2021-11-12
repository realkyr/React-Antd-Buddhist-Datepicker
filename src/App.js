import logo from './logo.svg'
import { useState } from 'react'
import { ConfigProvider, Radio } from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'

import 'dayjs/locale/th'
import 'moment/locale/th'

import { DatePicker } from './components/DatePicker'
import { MomentPicker } from './components/MomentPicker'

import th from 'antd/es/locale/th_TH'
import enUS from 'antd/es/locale/en_US'

import 'antd/dist/antd.css'
import './App.css'

const App = () => {
  const [lang, setLang] = useState(enUS)
  const [formatDayJS, setFormat] = useState(
    lang.locale === 'en' ? 'YYYY-MM-DD' : 'BBBB-MM-DD'
  )

  const changeLocale = e => {
    const localeValue = e.target.value

    moment.locale(localeValue.locale)
    dayjs.locale(localeValue.locale)

    setFormat(localeValue.locale === 'en' ? 'YYYY-MM-DD' : 'BBBB-MM-DD')
    setLang(localeValue)
  }

  const localeDay = JSON.parse(JSON.stringify(lang))
  const dayjsLang = { ...localeDay.Calendar.lang }
  dayjsLang.yearFormat = dayjs.locale() === 'th' ? 'BBBB' : 'YYYY'

  localeDay.Calendar.lang = dayjsLang
  localeDay.DatePicker.lang = dayjsLang

  const onChange = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Radio.Group value={lang} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="th" value={th}>
            ไทย
          </Radio.Button>
        </Radio.Group>

        <p>Try playing this DatePicker (DayJS)</p>
        <ConfigProvider locale={localeDay}>
          <DatePicker onChange={onChange} format={formatDayJS} />
        </ConfigProvider>

        <p>Try playing this DatePicker (MomentJS)</p>

        <ConfigProvider locale={localeDay}>
          <MomentPicker onChange={onChange} format={formatDayJS} />
        </ConfigProvider>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
