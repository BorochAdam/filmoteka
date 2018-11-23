import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact.jsx';
import Main from './main.jsx';
import AboutMe from './about.jsx';
import NotFound from './notfound.jsx';
import Navbar from './navbar.jsx';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';




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