import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LiveTvAll from '../components/liveTvAll/LiveTvAll';
import UserDashboard from '../components/Dashboards/userDashboard/UserDashboard';
import Home from '../pages/home/Home';

const AppRouter = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Route exact path='/'><Home /> </Route>

                <Route exact path='/channel/all'> <LiveTvAll /> </Route>
                
                <Route exact path='/user_dashboard'><UserDashboard /></Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;