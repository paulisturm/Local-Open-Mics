import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Mics from './components/Mics';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Welcome from './components/Welcome'

function App() {
  const [currentPage, setCurrentPage] = useState('About');


  return (
   <div className="App">
     <Navbar
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'Mics' ? (
        <Mics /> 
      ) : currentPage === 'Login' ?
      (<Login />) : currentPage === 'Favorites' ?
      (<Favorites />) :
      (<Welcome />)
      }
   </div>
  );
}

export default App;
