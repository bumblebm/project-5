import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NoMatch from './NoMatch';
import Fourpointone from './Fourpointone';
import { Router,Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={App}></Route>
   <Route path="/one" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}>
      <Route path="/Four/:id" component={Fourpointone} />
    </Route>
    <Route path="*" component={NoMatch}></Route>
  </Router>

  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
