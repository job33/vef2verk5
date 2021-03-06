import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch, NavLink } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Navigation className="navigation">
        </Navigation>
        <Home className="home">
        </Home>
      </main>
    );
  }
}

export default App;
