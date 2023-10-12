// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
// import Coder from './assets/Code.jpg';
import { About } from './pages/about'
import { Contact } from './pages/contact'
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <div className="hero-content flex justify-center items-center gap-20 h-screen">
      <img src={Coder} width={300} alt="" className="rounded-md bg-current"/>
      </div> */}
      {/* <Hero /> */}
    </div>
  );
}

export default App;
