import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Nav />
          <AnimatedRoutes />
        </div>
      </React.Fragment>
    </Router>

  )
}

export default App;
