import {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Navbar from './components/Navbar';
import Mics from './components/Mics';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Welcome from './components/Welcome'
import Register from './components/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
   
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
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

   </div>
   </ApolloProvider>
  );
}

export default App;
