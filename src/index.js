import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarDouBan } from './components/navbar-douban';
import styles from './index.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { MoviePage, MusicPage, BookPage } from './pages';

ReactDOM.render(
    <Router>
        <div>
            <NavbarDouBan />    
            <Switch>
                <Route path='/' component={MoviePage}/>                    
                <Route path='/movie' component={MoviePage}/>
                <Route path='/music' component={MusicPage}/>
                <Route path='/book' component={BookPage}/>
            </Switch>        
        </div>
    </Router>,
    document.querySelector('#root')
);