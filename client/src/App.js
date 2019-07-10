import React, { lazy, Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/img/spacex.png';

const client = new ApolloClient({
  uri: '/graphql',
});

// Lazy loading component
const Launches = lazy(() => import('./components/Launches'));
const Launch = lazy(() => import('./components/Launch'));

function App() {
  const logoStyle = {
    width: 300,
    display: 'block',
    margin: 'auto',
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Link to="/"><img src={Logo} alt="SpaceX" style={logoStyle} /></Link>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
