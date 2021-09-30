import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPictures from '../components/Dashboards/adminDashboard/AddPictures/AddPictures';
import MakeAdmin from '../components/Dashboards/adminDashboard/MakeAdmin/MakeAdmin';
import ManagePictures from '../components/Dashboards/adminDashboard/ManagePictures/ManagePictures';
import OrderList from '../components/Dashboards/adminDashboard/OrderList/OrderList';
import UserDashboard from '../components/Dashboards/userDashboard/UserDashboard';
import LiveTvAll from '../components/liveTV/liveTvAll/LiveTvAll';
import Login from '../components/login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import DramaPage from '../pages/dramaPage/DramaPage';
import Home from '../pages/home/Home';
import MoviesPage from '../pages/moviesPage/MoviesPage';
import PlayDramaVideo from '../pages/playVideo/PlayDrama';
import PlayTV from '../pages/playVideo/PlayTV';
import PopularPage from '../pages/popularPage/PopularPage';
import UpComingPage from '../pages/upComingPage/UpComingPage';
import PlayMovie from './../pages/playVideo/PlayMovie';




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

                    <Route exact path='/upcoming'> <UpComingPage /> </Route>

                    <Route exact path='/liveTV/video/:id'> <PlayTV /> </Route>
                    <Route exact path='/channel/liveTV/video/:id'> <PlayTV /> </Route>
                    <Route exact path='/drama/video/:id'> <PlayDramaVideo /> </Route>
                    <Route exact path='/movie/video/:id'> <PlayMovie /> </Route>


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