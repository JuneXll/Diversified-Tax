import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
// import Personal from './components/pages/Personal-taxes';
// import Business from './components/pages/Business-taxes';
// import Contact from './components/pages/Contact-us';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (

    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
