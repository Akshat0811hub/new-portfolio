import Navbar from '../src/components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Slider from '../src/components/Slider.jsx';
import Value from './pages/Value.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Home/>
      <Slider/>
      <Value/>
    </div>
  );
}

export default App;
