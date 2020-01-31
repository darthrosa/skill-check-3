import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Login';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/form' component={Form}/>
        <Route path='/post' component={Post}/>
    </Switch>
)