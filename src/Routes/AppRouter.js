import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LiveTvAll from '../components/liveTV/liveTvAll/LiveTvAll';
import UserDashboard from '../components/Dashboards/userDashboard/UserDashboard';
import Home from '../pages/home/Home';
import PopularPage from '../pages/popularPage/PopularPage';
import Login from '../components/login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import AddPictures from '../components/Dashboards/adminDashboard/AddPictures/AddPictures';
import ManagePictures from '../components/Dashboards/adminDashboard/ManagePictures/ManagePictures';
import OrderList from '../components/Dashboards/adminDashboard/OrderList/OrderList';
import MakeAdmin from '../components/Dashboards/adminDashboard/MakeAdmin/MakeAdmin';
import DramaPage from './../pages/dramaPage/DramaPage';


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


                    {/* <Route path='/destinations'><Destinations /></Route> */}

                    {/* users components */}
                    {/* <PrivateRoute path="/booking/:id"><Booking /></PrivateRoute>
                    <PrivateRoute path="/bookingMain"><Booking /></PrivateRoute>
                    <PrivateRoute path="/bookingPayment"><BookingPayment /></PrivateRoute>
                    <PrivateRoute path='/bookingList'><BookingList /></PrivateRoute>
                    <PrivateRoute path='/addReview'><AddReview /></PrivateRoute> */}
                    <PrivateRoute exact path='/user_dashboard'><UserDashboard /></PrivateRoute>


                    {/* admin components */}
                    <Route path='/orderList'><OrderList /></Route>
                    <Route path='/addPictures'><AddPictures /></Route>
                    <Route path='/managePictures'><ManagePictures /></Route>
                    <Route path='/makeAdmin'><MakeAdmin /></Route>


                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default AppRouter;