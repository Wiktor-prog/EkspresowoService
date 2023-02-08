import './App.css';
import { useState, useEffect } from 'react';
import  './Scss/main.scss'
import Preloader from './Components/Preloader/Preloader'
import About from './Components/About/about';
import Home from './Components/Home/home';
import Navigation from './Components/NavBar/Navbar';
import Counter from './Components/Counter/counter'
import Service from './Components/Service/service'
import Steps from './Components/Steps/steps'
import Map from './Components/GoogleMaps/maps'
import Contact from './Components/Contact/contact'


export default function App() {
  
  const [Loading, setLoading] = useState(false) 
    useEffect(() => {
      setLoading(true) 
        setTimeout(() => {
          setLoading(false)
        }, 1500 )
    },[])

  return (
    <div className="App">
      {
        Loading? <Preloader/> :
        
      <div>
        <Navigation />
        <Home />
        <About />
        <Counter />
        <Service />
        <Steps />
        <Map />
        <Contact />
      </div>
    }
    </div>
  );
}

