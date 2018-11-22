import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <h1>filmoteka</h1>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="activeLink">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="activeLink">About me</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
