import Navbar from '../src/components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Slider from '../src/components/Slider.jsx';
import Value from './pages/Value.jsx';
import Companies from './pages/Companies.jsx'
import Industries from './pages/Industries.jsx';
import MoreAbout from './components/moreabout/MoreAbout.jsx';
import CurrentlyWorking from './pages/CurrentlyWorking.jsx';
import Zettle from './pages/Zettle.jsx';
import Paypal from './pages/Paypal.jsx';
import Qliro from './pages/Qliro.jsx';
import Trustly  from './pages/Trustly.jsx';
import Readly from './pages/Readly.jsx';
import Klarna from './pages/Klarna.jsx';
import Viaplay from './pages/Viaplay.jsx';

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
      <Zettle/>
      <Paypal/>
      <Qliro/>
      <Trustly/>
      <Readly/>
      <Klarna/>
      <Viaplay/>
    </div>
  );
}

export default App;
