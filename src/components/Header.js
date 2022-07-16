import React, { Component } from 'react';
import logo from '../util/3B-Protection.webp';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <img
                        alt=""
                        src={logo}
                        width="215"
                        height="79"
                        className="d-inline-block align-top"
                    /></h1>
            </header>
        )
    }
}

export default Header