import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Headers/>

        <Routes>
          <Route path='/' element={<RestaurantList/>}/>
          <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
        </Routes>

      </header>

      <Footer/>
      </Router>
    </div>
  );
}

export default App;
