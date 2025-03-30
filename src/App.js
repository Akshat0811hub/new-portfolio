import Navbar from '../src/components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Slider from '../src/components/Slider.jsx';
import Value from './pages/Value.jsx';
import Companies from './pages/Companies.jsx'
import Industries from './pages/Industries.jsx';
import MoreAbout from './components/moreabout/MoreAbout.jsx';
import CurrentlyWorking from './pages/CurrentlyWorking.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Slider/>
      <Value/>
      <Companies/>
      <Industries/>
      <CurrentlyWorking/>
      <MoreAbout/>
    </div>
  );
}

export default App;
