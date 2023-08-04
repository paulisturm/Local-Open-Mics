import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Mics from './components/Mics';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Welcome from './components/Welcome'
import Footer from './components/Footer';
import Register from './components/Register';
import Image from './assets/Mic.webp'

function App() {
  const [currentPage, setCurrentPage] = useState('Welcome');


  return (
   <div className="App">
     <Navbar
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'Mics' ? (
        <Mics /> 
      ) : currentPage === 'Login' ?
      (<Login />) : currentPage === 'Favorites' ?
      (<Favorites />) : currentPage === 'Welcome' ?
      (<Welcome />) :
      (<Register />)
      }
      <div style={{ backgroundImage:`url(${Image})`,backgroundRepeat:"no-repeat" }}></div>
   </div>
  );
}

export default App;
