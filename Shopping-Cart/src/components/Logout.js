import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You have logged out!</h1>
                <Link to="/login">Login Again</Link>
                
            </div>
        )
    }
}

export default Logout;
