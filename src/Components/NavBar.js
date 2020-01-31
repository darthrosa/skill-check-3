import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NavBar extends Component {

    render(){
        if (this.props.location.pathname === "/") {
            return <></>;
        } else {
            return(
                <div className="nav-bar">
                    <div onClick={() => this.props.history.push('/dashboard')} className='logo'>
                        NavBarLogo
                    </div>
                    <button>Home</button>
                    <button>New Post</button>
                    <button>Logout</button>
                </div>
            )
        }
    }
}

export default withRouter(NavBar);