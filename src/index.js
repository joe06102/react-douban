import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarDouBan, Carousel, Pivot, PivotItem } from './components';
import styles from './index.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { MoviePage, MusicPage, BookPage } from './pages';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Router>
        <div>
            <NavbarDouBan />    
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <div>
                            <Carousel autoplay={true} reverse={true} interval={3000} style={{
                                width: '100%',
                                height: '30rem'
                            }}>
                                <div style={{ width: '100%', height: '30rem', backgroundColor: '#c33' }} onClick={e => {console.log(e.target.textContent)}}>1</div>
                                <div style={{ width: '100%', height: '30rem', backgroundColor: '#3c9' }} onClick={e => {console.log(e.target.textContent)}}>2</div>
                                <div style={{ width: '100%', height: '30rem', backgroundColor: '#3cc' }} onClick={e => {console.log(e.target.textContent)}}>3</div>
                            </Carousel>
                            <Pivot>
                                <PivotItem title={'pivot-1'}><div style={{ height: 200, backgroundColor: '#c33' }}>this is pivot-item-1</div></PivotItem>
                                <PivotItem title={'pivot-2'}><div style={{ height: 200, backgroundColor: '#3c9' }}>this is pivot-item-2</div></PivotItem>
                                <PivotItem title={'pivot-3'}><div style={{ height: 200, backgroundColor: '#3cc' }}>this is pivot-item-3</div></PivotItem>
                            </Pivot>                        
                        </div>
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