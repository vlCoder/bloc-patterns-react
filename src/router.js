import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact/contactView';




const Routes = () => (
    <Switch>
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Routes;