import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home';

const AppRouter = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;