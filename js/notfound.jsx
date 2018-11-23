import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    Error 404 - Page not found.
                </h2>
                <Link to="/">Main page</Link>
            </div>
        )
    }
}