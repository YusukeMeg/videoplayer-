import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import VideoList from './VideoList';
import AppContext from './AppContext';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider>
          <VideoPlayer></VideoPlayer>
          {/* <Router>
            <Route path="/" component={VideoList} />
            <Route path="/play" component={VideoPlayer} />
            
          </Router> */}
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
