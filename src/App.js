import React from 'react';


import AppRouter from './Routes/AppRouter';
import Nav from './components/shared/nav/Nav';
function App() {
  return (
    <AppRouter>
      <Nav />
    </AppRouter>
  );
}

export default App;
