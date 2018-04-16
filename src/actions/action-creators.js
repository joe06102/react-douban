import * as types from './action-types';

const addMovie = (movie) => {
    return {
        type: types.ADD_MOVIE,
        payload: movie
    }
}

const addMovies = (movies) => {
    return {
        type: types.ADD_MOVIES,
        payload: movies
    }
}

const addCelebrity = (celebrity) => {
    return {
        type: types.ADD_CELEBRITY,
        payload: celebrity
    }
}

const addCelebrities = (celebrities) => {
    return {
        type: types.ADD_CELEBRITIES,
        payload: celebrities
    }
}

const addCities = (cities) => {
    return {
        type: types.ADD_CITIES,
        payload: cities
    }
}

export {
    addMovie,
    addMovies,
    addCelebrity,
    addCelebrities,
    addCities,
}