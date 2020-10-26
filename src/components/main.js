import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Porfolio from './porfolio';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/about" component={LandingPage} />
        <Route path ="/porfolio" component={Porfolio} />
        <Route path ="/contact" component={Contact} />
    </Switch>

)
export default Main;