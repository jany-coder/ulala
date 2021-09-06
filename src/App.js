import React from 'react';
import AppRouter from './Routes/AppRouter';
import Nav from "./components/shared/nav/Nav"
import Natok from './components/NatokData/Natok';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <AppRouter>
      <Nav/>
      <Natok/>
    </AppRouter>
  );
}

export default App;
