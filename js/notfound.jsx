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
                Error 404 - Page not found.
                <br/>
                <Link to="/">Main page</Link>
            </div>
        )
    }
}