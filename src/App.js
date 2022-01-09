import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Form pages
import NewPersonal from './components/pages/NewPersonal';
import ReturningPersonal from './components/pages/ReturningPersonal';
import NewBusiness from './components/pages/NewBusiness';
import ReturningBusiness from './components/pages/ReturningBusiness';
import ExtraForms from './components/pages/ExtraForms';
//lazy-loading
// const NewPersonal = React.lazy(() => import(/* webpackChunkName: "NewPersonal" */ './components/pages/NewPersonal'));
// const ReturningPersonal = React.lazy(() => import(/* webpackChunkName: "ReturningPersonal" */ './components/pages/ReturningPersonal'));
// const NewBusiness = React.lazy(() => import(/* webpackChunkName: "NewBusiness" */ './components/pages/NewBusiness'));
// const ReturningBusiness = React.lazy(() => import(/* webpackChunkName: "ReturningBusiness" */ './components/pages/ReturningBusiness'));
// const ExtraForms = React.lazy(() => import(/* webpackChunkName: "ExtraForms" */ './components/pages/ExtraForms'));

// Main Pages
import Home from './components/pages/Home';
import Personal from './components/pages/Personal-taxes';
import Business from './components/pages/Business-taxes';
import Contact from './components/pages/Contact-us';
import Success from './components/pages/Success';
import Calendar from './components/pages/Calendar';
import Navigation from './components/Navigation';
// const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './components/pages/Home'));
// const Personal = React.lazy(() => import(/* webpackChunkName: "Personal-taxes" */ './components/pages/Personal-taxes'));
// const Business = React.lazy(() => import(/* webpackChunkName: "Business-taxes" */ './components/pages/Business-taxes'));
// const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ './components/pages/Contact-us'));
// const Success = React.lazy(() => import(/* webpackChunkName: "Success" */ './components/pages/Success'));
// const Calendar = React.lazy(() => import(/* webpackChunkName: "Calendar" */ './components/pages/Calendar'))
// const Navigation = React.lazy(() => import(/* webpackChunkName: "Navigation" */ './components/Navigation'));


const yellowButton = {
  backgroundColor:'#e1ad00',
  fontFamily: 'Bebas Neue, tahoma',
  letterSpacing: '4px',
  border: 'none'
}

const oops = (
  <div className='text-center'style={{paddingTop:'100px'}}>
    <h1 className='display-2'>Oops! Something went wrong!</h1>
    <br/>
    <a href='/'><button style={yellowButton}>Go Back to Homepage</button></a>
  </div>
)


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
                <Route exact path='/success' component={Success}/>
                <Route exact path='/calendar' component={Calendar}/>
                {/* Form pages */}
                <Route exact path='/new-personal-clients' component={NewPersonal}/>
                <Route exact path='/returning-personal-clients' component={ReturningPersonal}/>
                <Route exact path='/new-business-clients' component={NewBusiness}/>
                <Route exact path='/returning-business-clients' component={ReturningBusiness}/>
                <Route exact path='/extra-forms' component={ExtraForms}/>
              </Container>
              <Route render={()=> oops}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
