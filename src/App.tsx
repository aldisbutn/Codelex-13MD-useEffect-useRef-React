import './App.css';
import { FirstPage } from './components/FirstPage/FirstPage';
import { SecondPage } from './components/SecondPage/SecondPage';
import { ThirdPage } from './components/ThirdPage/ThirdPage';

function App() {
  return (
    <div className='app'>
      <div className='firstPage'>
        <FirstPage />
      </div>
      <div className='secondPage'>
        <SecondPage />
      </div>
      <div className='thirdPage'>
        <ThirdPage />
      </div>
    </div>
  );
}

export default App;
