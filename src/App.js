import React from 'react';
import MovieProvider from './MovieContext';
import Movielist from './Movielist';
import Nav from './Nav';
import AddMovie from './addMovie';

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
          <Nav/>
          <AddMovie/>
          <Movielist/>
      </div>
    </MovieProvider>
  );
}

export default App;
