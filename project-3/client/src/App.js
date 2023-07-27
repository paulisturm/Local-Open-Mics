import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  const [currentPage, setCurrentPage] = useState('About');


  return (
   <div className="App">
     <Navbar
        setCurrentPage={setCurrentPage}
      />
      {/* {currentPage === 'About' ? (
        <About /> 
      ) : currentPage === 'Portfolio' ?
      (<Portfolio />) : currentPage === 'Contact' ?
      (<Contact />) :
      (<Resume />)
      } */}
      <Welcome></Welcome>
   </div>
  );
}

export default App;
