import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MovieCardContainer } from './components/movie-card'
import { MoviePage, MusicPage, BookPage } from './pages'
import { NavbarDouBan } from './components'
import * as reducers from './reducers'
import styles from './index.css'
import { rootSaga } from './sagas/root'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
    movies: reducers.MovieReducer,
    in_theater: reducers.InTheaterReducer,
    coming_soon: reducers.ComingSoonReducer,
    celebrities: reducers.celebrityReducer,
    cities: reducers.citiesReducer,
    current: reducers.CurrentReducer,
    loading: reducers.LoadingReducer,
}), composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavbarDouBan />
                <Route path='/' exact component={MoviePage} />
                <Route path='/movie' component={MoviePage}/>
                <Route path='/music' component={MusicPage} />
                <Route path='/book' component={BookPage} />                
            </div>
        </Router>
    </Provider>,
    document.querySelector('#root')
)