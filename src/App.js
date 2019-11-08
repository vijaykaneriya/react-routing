import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './container/header';
import DashboardRouter from './container/router'


  



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <DashboardRouter/>
      </Router>
    </div>
  );
}

export default App;
