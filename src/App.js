//Styles
import './App.css';
//Components
import ScoresComponent from './components/ScoresComponent/ScoresComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ChooseGameComponent from './components/ChooseGameComponent/ChooseGameComponent';

function App() {
  return (
    <div className="App">
      <ScoresComponent></ScoresComponent>
      <HeaderComponent></HeaderComponent>
      <ChooseGameComponent></ChooseGameComponent>
    </div>
  );
}

export default App;
