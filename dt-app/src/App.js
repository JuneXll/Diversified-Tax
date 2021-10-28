import React from 'react';
import '@csstools/normalize.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Personal from './components/pages/Personal-taxes';
import Business from './components/pages/Business-taxes';
import Contact from './components/pages/Contact-us';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


function App() {
  return (

    <div className="App">
      <Navigation/>
        <Router>
          <Switch>
            <Container>
              <Route exact path='/' component={Home}/>
              <Route exact path='/personal-tax' component={Personal}/>
              <Route exact path='/business-tax' component={Business}/>
              <Route exact path='/contact-us' component={Contact}/>
            </Container>
            <Route render={()=><h1 className='display-2'>Oops! Wrong Page!</h1>}/>
          </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
