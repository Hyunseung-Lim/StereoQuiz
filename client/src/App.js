import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { QuizPage } from './Pages/QuizPage';
import { TargetPage } from './Pages/TargetPage';
import { TypePage } from './Pages/TypePage';

import randomSet from './Data/random.json';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App' id='app__wrap'>
          <Routes>
            <Route path='/quiz' element={<QuizPage set = {randomSet}/>}/>
            <Route path='/target' element={<TargetPage/>} />
            <Route path='/type' element={<TypePage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
