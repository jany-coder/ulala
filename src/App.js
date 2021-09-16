import React from 'react';
import AppRouter from './Routes/AppRouter';
import Nav from "./components/shared/nav/Nav"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AppRouter>
      <Nav/>
    </AppRouter>
  );
}

export default App;
