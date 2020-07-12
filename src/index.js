import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'
import DetailsComponent from './details/details'
import UploadComponent from './upload/upload'
import SliderComponent from './slider/slider'
import './firebase.js'
const firebase = require("firebase")
require("firebase/firestore")


const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
            <Route path='/details' component={DetailsComponent}></Route>
            <Route path='/upload' component={UploadComponent}></Route>
            <Route path='/view' component={SliderComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
