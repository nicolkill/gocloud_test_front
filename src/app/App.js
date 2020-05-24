import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './main_page/MainPage';
import Success from './success/Success';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/success" component={Success} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
