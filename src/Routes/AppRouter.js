import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LiveTvAll from '../components/liveTV/liveTvAll/LiveTvAll';
import UserDashboard from '../components/Dashboards/userDashboard/UserDashboard';
import Home from '../pages/home/Home';
import PopularPage from '../pages/popularPage/PopularPage';
import Login from '../components/login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import AdminDashboard from '../components/Dashboards/adminDashboard/AdminDashboard';
import DramaPage from './../pages/dramaPage/DramaPage';
import MoviesPage from '../pages/moviesPage/MoviesPage';


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

                <Route exact path='/drama/all'> <DramaPage /> </Route>

                <Route exact path='/popular'> <PopularPage /> </Route>

                <Route exact path='/movies/all'> <MoviesPage /> </Route>

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