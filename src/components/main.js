import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Porfolio from './porfolio';
import Resume from './resume'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/about" component={About} />
        <Route path ="/porfolio" component={Porfolio} />
        <Route path ="/resume" component={Resume} />
        <Route path ="/contact" component={Contact} />
    </Switch>

)
export default Main;