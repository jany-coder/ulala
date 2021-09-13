import React from 'react';
<<<<<<< HEAD
import AppRouter from './Routes/AppRouter';
import Nav from "./components/shared/nav/Nav"
import Natok from './components/NatokData/Natok';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======


import AppRouter from './Routes/AppRouter';
import Nav from './components/shared/nav/Nav';
>>>>>>> 170ac00763d09ef47433409181fb617015162520
function App() {
  return (
    <AppRouter>
      <Nav/>
      <Natok/>
    </AppRouter>
  );
}

export default App;
