import './App.css';
import Detail from './component/Detail';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Nav1 from './component/Nav1';
import Counter from './component/Counter';
import { Container, Navbar, Nav } from 'react-bootstrap'
import UserDetails from './component/UserDetails';
import CountryDetails from './component/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav1 />
        <Routes>
          <Route path='/' element={<Detail/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/details' element={<UserDetails/>} />
          <Route path='/countrydetails' element={<CountryDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
