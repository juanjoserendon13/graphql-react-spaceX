import React, { lazy, Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Logo from './assets/img/spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

// Lazy loading component
const Launches = lazy(() => import('./components/Launches'));

function App() {
  const logoStyle = {
    width: 300,
    display: 'block',
    margin: 'auto',
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApolloProvider client={client}>
        <div className="container">
          <img src={Logo} alt="SpaceX" style={logoStyle} />
          <Launches />
        </div>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
