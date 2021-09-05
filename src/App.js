import React from 'react';
import Nav from './components/Shared/Nav/Nav';
import AppRouter from './Routes/AppRouter';
function App() {
  return (
    <AppRouter>
      <Nav />
    </AppRouter>
  );
}

export default App;
