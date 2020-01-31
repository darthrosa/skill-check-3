import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        // this.logout = this.logout.bind(this);
    }

    handleChange = e => {
        // const {name, value} = e.target
        this.setState({[e.target.name]: e.target.value})
    };

    login = (username, password) => {
        axios.post('/auth/login', {username, password}).then(res => {
            this.props.history.push('/dashboard')
        })
    };

    register = (username, password) => {
        axios.post('/auth/register', {username, password}).then(res => {
            this.props.history.push('/dashboard')
        })
    };


    render(){
        const {username, password} = this.state;
        return(
            <div className='login-contianer'>Login
                <div className='login-box'>
                    <input
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={username}
                    onChange={e => this.handleChange(e)}
                    />
                    <input
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={e => this.handleChange(e)}
                    />
                    <button onClick={() => this.login(username, password)}>Login</button>
                    <button onClick={() => this.register(username, password)}>Register</button>
                </div>
            </div>
        )
    }
}

export default Login;