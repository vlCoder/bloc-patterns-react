import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <h1>Contact 2</h1>
                <Link to="Contact">Contact</Link>
            </div>
        )
    }
}

export default Header;