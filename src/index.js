import React from 'react';
import { render } from 'react-dom';

import Home from './components/App/Home';
import Results from './components/App/Results';
import Profile from './components/App/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/base.scss';

render(
  <div className='container app-content text-white text-light'>
    <BrowserRouter>
      <Switch>
        <Route 
          component={Results} 
          path='/results' 
        />
        <Route 
          component={Profile} 
          path='/profile' 
        />
        <Route 
          component={Home} 
          path='/' 
        />
      </Switch>
    </BrowserRouter>
  </div>
  , document.getElementById('root'));
