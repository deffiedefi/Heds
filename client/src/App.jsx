// MODULES
import { Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';



// PAGES
import Home from './pages/Home';
import FAQ from './pages/FAQ';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// ASSETS
import '../assets/styles/Custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// MODEL


// # APP - SPA ROUTING
const App = () => {
   return (
      <Fragment>
         {/* <Route path='/' component={HeadCanvas}></Route> */}
         <Route path='/' component={Navbar}></Route>
         <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/faq' component={FAQ}></Route>
         </Switch>
         <Route path='/' component={Footer}></Route>
      </Fragment>
   );
};

export default App;
