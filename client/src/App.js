import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MovieList from './pages/MovieList';
import ReviewPage from './pages/reviewPage';
import Navbar from './components/Navbar';
import Signup from './pages/Signup'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

//sets context for storing JWT in header
import { setContext } from '@apollo/client/link/context';

//client can access graphql
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/login' element={<Login />} />
            <Route path='/movies' element={<MovieList />} />
            <Route path='/reviews' element={<ReviewPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
