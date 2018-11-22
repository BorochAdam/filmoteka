import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <h1>filmoteka</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class AboutMe extends React.Component{
    render(){
        return(
            <div>
                Hello, I'm Adam, nice to meet You :)
            </div>
        );
    }
}

class Contact extends React.Component{
    render(){
        return(
            <div>
                Contact me at borochadam1991@gmail.com
            </div>
        );
    }
}

class NotFound extends React.Component{
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

class Main extends React.Component{
    render(){
        return(
            <div>
                Main page
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={AboutMe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});