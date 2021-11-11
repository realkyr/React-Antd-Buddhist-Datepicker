import logo from './logo.svg';
import { ConfigProvider } from 'antd'
import {
  DatePicker
} from './components/DatePicker'

import th from 'antd/es/locale/th_TH';

import 'antd/dist/antd.css'
import './App.css';

function App() {
  th.Calendar.lang.yearFormat = 'BBBB'

  return (
    <ConfigProvider locale={th}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Try playing this DatePicker
          </p>

          <DatePicker />
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
    </ConfigProvider>
  );
}

export default App;
