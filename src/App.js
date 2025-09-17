import logo from './logo.svg';
import './App.css';
import Light from './components/Light';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
   

    <p className='text-6xl'>
      Hello
    </p>
    <div className='east flex flex-col gap-4'>
    <Light color='red' isOn={true} />
    <Light color='yellow' status="on" />
    <Light color='green' status="on" />
    </div>
    

      </header>
    </div>
  );
}

export default App;
