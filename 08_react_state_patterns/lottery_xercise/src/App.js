import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title={'Mini Lottery'} numBalls={4} maxNum={20}/>
    </div>
  );
}

export default App;
