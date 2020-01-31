import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/post/:postid' component={Post}/>
        <Route path='/new' component={Form}/>
    </Switch>
);