import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LiveTvAll from '../components/liveTvAll/LiveTvAll';
import UserDashboard from '../components/Dashboards/userDashboard/UserDashboard';
import Home from '../pages/home/Home';
import PopularPage from '../pages/popularPage/PopularPage';
import Login from '../components/login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import AdminDashboard from '../components/Dashboards/adminDashboard/AdminDashboard';

export const UserContext = createContext();

const AppRouter = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            {children}
            <Switch>
                <Route exact path='/'><Home /> </Route>

                <Route exact path='/channel/all'> <LiveTvAll /> </Route>

                <Route exact path='/popular'> <PopularPage /> </Route>

                <PrivateRoute exact path='/user_dashboard'><UserDashboard /></PrivateRoute>

                <Route exact path='/admin_dashboard'><AdminDashboard /></Route>

                <Route path="/login">
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    );
};

export default AppRouter;