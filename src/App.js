import Navbar from '../src/components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Slider from '../src/components/Slider.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Home/>
      <Slider/>
     
    </div>
  );
}

export default App;
