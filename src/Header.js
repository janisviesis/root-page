import React, { Component } from 'react';
import logo from './images/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                
                <header>

                    <nav>
                        <h1>
                            <img src={logo} alt={"logo"} style={{height: '64px'}} />
                        </h1>
                        <ul>
                            <li><a data-page="persons" href="#">Personas</a></li>
                            <li><a data-page="estate" href="#">Īpašumi</a></li>
                            <li><a data-page="vechicles" href="#">Transports</a></li>
                            <div style={{position: 'absolute'}} class="bubble"></div>
                        </ul>
                    </nav>

                </header>
                
            </div>
        )
    }
}
