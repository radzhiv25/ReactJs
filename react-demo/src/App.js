import './App.css';
import Hey from './components/Greet'
import {About} from './components/About'
import {Message} from './components/Message'
import {Handler} from './components/Handling'

function App() {
  return (
    <div className="App">
      {/* <Hey name="Rajeev"/>
      <About name="Rajeev" job="Developer" age="20"/>
      <Hey name="Noopur"/>
      <About name="Noopur" job="UI/UX" age="20"/>
      <Hey name="Zeus">
      <About name="Zeus" job="God" age="Unknown"/>
      <p>This is children prop</p>
      </Hey> */}
      {/* <Message /> */}
      <Handler />
    </div>
  );
}

export default App;
