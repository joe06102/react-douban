import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MoviePage, MusicPage, BookPage } from './pages'
import { NavbarDouBan } from './components'
import * as reducers from './reducers'
import styles from './index.css'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
    movies: reducers.movieReducer,
    celebrities: reducers.celebrityReducer,
    cities: reducers.citiesReducer,
    currentCity: reducers.currentCityReducer
}), composeEnhancer(applyMiddleware(thunk)))

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