import logo from '../../logo.svg';
import './App.css';
import Home from '../Home/Home';
import { Header } from '../Header/Header';
import { Reviews } from '../Reviews/Reviews';
import { Prepare } from '../Prepare/Prepare';
import { HashRouter, Routes, Route } from "react-router-dom";
import { CountryProvider } from '../State/Country/context';


function App() {
  return (
    <div className="App">
      
      <div>
      <CountryProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/prepare" element={<Prepare />}></Route>
          </Routes>
        </HashRouter>
      </CountryProvider>
    </div>
    </div>
  );
}

export default App;
