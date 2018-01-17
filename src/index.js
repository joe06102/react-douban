import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MoviePage, MusicPage, BookPage } from './pages'
import { NavbarDouBan } from './components'
import { celebrityReducer, movieReducer, citiesReducer } from './reducers'
import { getMoviesInTheater } from './requests/movie-request'
import styles from './index.css'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
    movies: movieReducer,
    celebrities: celebrityReducer,
    cities: citiesReducer
}), composeEnhancer(applyMiddleware(thunk)))

//store.dispatch(getMoviesInTheater)

// <div style={{ width: '100%', height: '30rem', backgroundColor: '#c33' }} onClick={e => {console.log(e.target.textContent)}}>
// <Avatar src='https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50940.jpg' alt='lgjt' style={{ width: '90px', height: '128px' }}/>
// </div>
// <div style={{ width: '100%', height: '30rem', backgroundColor: '#3c9' }} onClick={e => {console.log(e.target.textContent)}}>
// <Avatar src='https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449935218.59.jpg' alt='hx' style={{ width: '90px', height: '128px' }}/>
// </div>
// <div style={{ width: '100%', height: '30rem', backgroundColor: '#3cc' }} onClick={e => {console.log(e.target.textContent)}}>
// <Avatar src='https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510497293.38.jpg' alt='zyq' style={{ width: '90px', height: '128px' }}/>                                
// </div>

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavbarDouBan />    
                <Switch>
                    <Route exact path='/' component={MoviePage}></Route>                    
                    <Route path='/movie' component={MoviePage}/>
                    <Route path='/music' component={MusicPage}/>
                    <Route path='/book' component={BookPage}/>
                </Switch>        
            </div>
        </Router>    
    </Provider>,
    document.querySelector('#root')
);