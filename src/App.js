import './App.css';
import  './Scss/main.scss'
import About from './Components/About/about';
import Home from './Components/Home/home';
import Navigation from './Components/NavBar/Navbar';
import Counter from './Components/Counter/counter'
import Service from './Components/Service/service'
import Steps from './Components/Steps/steps'
import Map from './Components/GoogleMaps/maps'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Counter />
      <Service />
      <Steps />
      <Map />
      <Contact />
    </div>
  );
}
export default App;
