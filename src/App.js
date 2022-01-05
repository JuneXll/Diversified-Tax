import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Animated} from "react-animated-css";

// Form pages
// const NewPersonal = React.lazy(() => import(/* webpackChunkName: "NewPersonal" */ './components/pages/NewPersonal'));
import NewPersonal from './components/pages/NewPersonal';
// const ReturningPersonal = React.lazy(() => import(/* webpackChunkName: "ReturningPersonal" */ './components/pages/ReturningPersonal'));
import ReturningPersonal from './components/pages/ReturningPersonal';
// const NewBusiness = React.lazy(() => import(/* webpackChunkName: "NewBusiness" */ './components/pages/NewBusiness'));
import NewBusiness from './components/pages/NewBusiness';
// const ReturningBusiness = React.lazy(() => import(/* webpackChunkName: "ReturningBusiness" */ './components/pages/ReturningBusiness'));
import ReturningBusiness from './components/pages/ReturningBusiness';
// const ExtraForms = React.lazy(() => import(/* webpackChunkName: "ExtraForms" */ './components/pages/ExtraForms'));
import ExtraForms from './components/pages/ExtraForms';

// Main Pages
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './components/pages/Home'));
const Personal = React.lazy(() => import(/* webpackChunkName: "Personal-taxes" */ './components/pages/Personal-taxes'));
const Business = React.lazy(() => import(/* webpackChunkName: "Business-taxes" */ './components/pages/Business-taxes'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ './components/pages/Contact-us'));
const Success = React.lazy(() => import(/* webpackChunkName: "Success" */ './components/pages/Success'));
const Calendar = React.lazy(() => import(/* webpackChunkName: "Calendar" */ './components/pages/Calendar'))
const Navigation = React.lazy(() => import(/* webpackChunkName: "Navigation" */ './components/Navigation'));

const ballStyle = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: "#003054",
  marginRight: 10,
  marginTop: '3em',
  animation: ".5 ease infinite alternate"
}

const text = {
  color: "#003054"
}

 //Loading screen markup and animation
 const loadingMarkup = (
  <div className="loading d-column w-100 text-center">
    <div className="balls d-flex justify-content-center">
      <Animated animationIn="bounce" animationOut="pulse" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <div className="ball1 display-1" style={ballStyle}></div>
      </Animated>

      <Animated animationIn="bounce" animationOut="pulse" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
        <div className="ball2 display-1" style={ballStyle}></div>
      </Animated>

      <Animated animationIn="bounce" animationOut="pulse" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
        <div className="ball3 display-1" style={ballStyle}></div>
      </Animated>
    </div>
    <span className="display-3" style={text}>Loading</span>
  </div>
)

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
            <Suspense fallback={loadingMarkup}>
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
            </Suspense>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
