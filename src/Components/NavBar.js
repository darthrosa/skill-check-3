import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../reducks/reducer'
import axios from 'axios';

class NavBar extends Component {
    componentDidMount(){
        axios.get('/auth/user').then(res => {
	        console.log(res)
	        if(res.data === 'No user on session'){
	            this.props.history.push('/')
	        } else {
                this.props.getUser(res.data)
            }
	    })

    }

    render(){
        if (this.props.location.pathname === "/") {
            return <></>;
        } else {
            return(
                <div className="nav-bar">
                    <div
                        className='welcome'
                        onClick={() => this.props.history.push('/dashboard')}
                    > Welcome {this.props.user.username}!
                    </div>
                    <div class="nav_profile_pic" ></div>
                    <button
                        onClick={() => this.props.history.push('/dashboard')}
                    >Home</button>
                    <button
                         onClick={() => this.props.history.push('/new')}
                    >New Post</button>
                    <button 
                        className='logout'
                        onClick={() => axios.post('/auth/logout').then(() => this.props.history.push('/'))}
                    >Logout</button>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {user: state.reducer.user};
}

export default connect(mapStateToProps, {getUser})(withRouter(NavBar));