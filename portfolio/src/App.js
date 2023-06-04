// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar'
import Coder from '../src/Code.jpg';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar className="" />
      <div className="hero-content flex justify-center items-center gap-20 h-screen">
      <img src={Coder} width={300} alt="" className="rounded-md bg-current"/>
      <Hero />
      </div>
    </div>
  );
}

export default App;
