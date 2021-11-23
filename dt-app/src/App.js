import React from 'react';
import '@csstools/normalize.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Main Pages
import Home from './components/pages/Home';
import Personal from './components/pages/Personal-taxes';
import Business from './components/pages/Business-taxes';
import Contact from './components/pages/Contact-us';
// Form pages
import NewPersonal from './components/pages/NewPersonal';
import ReturningPersonal from './components/pages/ReturningPersonal';
import NewBusiness from './components/pages/NewBusiness';
import ReturningBusiness from './components/pages/ReturningBusiness';
import ExtraForms from './components/pages/ExtraForms';
import Navigation from './components/Navigation';


function App() {
  return (

    <div className="App">
      <Navigation/>
        <Router>
          <Switch>
            <Container>
              {/* Main Pages */}
              <Route exact path='/' component={Home}/>
              <Route exact path='/personal-tax' component={Personal}/>
              <Route exact path='/business-tax' component={Business}/>
              <Route exact path='/contact-us' component={Contact}/>
              {/* Form pages */}
              <Route exact path='/new-personal-clients' component={NewPersonal}/>
              <Route exact path='/returning-personal-clients' component={ReturningPersonal}/>
              <Route exact path='/new-business-clients' component={NewBusiness}/>
              <Route exact path='/returning-business-clients' component={ReturningBusiness}/>
              <Route exact path='extra-forms' component={ExtraForms}/>
            </Container>
            <Route render={()=><h1 className='display-2'>Oops! Wrong Page!</h1>}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
