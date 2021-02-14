import React from 'react';
import { Route , Switch , Redirect} from 'react-router-dom';

//IMPORT BOOTSRAP CSS & JS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


//COMPONNETS IMPORTS
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';

import './index.css';

const  App = ()=> {

  return(
    <>
    <Navbar/>

      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact'  component={Contact} />  
      <Route exact path='/services'  component={Services} />  
      <Route component={Error}/>
      <Redirect to="/"/>
      </Switch>
      
    </>
  )

}

export default App;
