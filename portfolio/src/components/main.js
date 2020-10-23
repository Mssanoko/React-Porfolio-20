import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Contact from './contact'
import Porfolio from './porfolio'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={About} />
        <Route path ="/porfolio" component={Porfolio} />
        <Route path ="/contact" component={Contact} />
    </Switch>
)
export default Main;