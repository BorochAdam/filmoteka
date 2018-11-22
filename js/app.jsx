import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class Main extends React.Component{
    render(){
        return(
            <div>
                Loading... page
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <Main/>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});