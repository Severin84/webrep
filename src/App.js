import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Components/HomePage';
import Features from './Components/Features';
import Products from './Components/Products';
import FA from './Components/FA';
import Brands from './Components/Brands';
import Athe from './Components/Athe';
import Es from './Components/Es';
import Media from './Components/Media';
import Software from './Components/Software';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/soft" element={<Software/>}/>
      <Route exact path="/Features" element={<Features/>}/>
      <Route exact path="/Products" element={<Products/>}/>
      <Route exact path="/FA" element={<FA/>}/>
      <Route exact path="/Brands" element={<Brands/>}/>
      <Route exact path="/Athe" element={<Athe/>}/>
      <Route exact path="/Es" element={<Es/>}/>
      <Route exact path="/md" element={<Media/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
