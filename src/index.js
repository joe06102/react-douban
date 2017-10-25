import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarDouBan, Carousel } from './components';
import styles from './index.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { MoviePage, MusicPage, BookPage } from './pages';

ReactDOM.render(
    <Router>
        <div>
            <NavbarDouBan />    
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <Carousel autoplay={true} reverse={true} interval={3000} style={{
                            width: '100%',
                            height: '30rem'
                        }}>
                            <div style={{ width: '100%', height: '30rem', backgroundColor: '#c33' }} onClick={e => {console.log(e.target.textContent)}}>1</div>
                            <div style={{ width: '100%', height: '30rem', backgroundColor: '#3c9' }} onClick={e => {console.log(e.target.textContent)}}>2</div>
                            <div style={{ width: '100%', height: '30rem', backgroundColor: '#3cc' }} onClick={e => {console.log(e.target.textContent)}}>3</div>
                        </Carousel>
                    );
                }}/>                    
                <Route path='/movie' component={MoviePage}/>
                <Route path='/music' component={MusicPage}/>
                <Route path='/book' component={BookPage}/>
            </Switch>        
        </div>
    </Router>,
    document.querySelector('#root')
);