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

const setIsFetching = (isFetching) => {
    return {
        type: types.SET_IS_FETCHING,
        payload: isFetching
    }
}

const setMovieFetchStatus = (fetchStatus) => {
    return {
        type: types.SET_MOVIE_FETCH_STATUS,
        payload: fetchStatus
    }
}

const setCelebrityFetchStatus = (fetchStatus) => {
    return {
        type: types.SET_CELEBRITY_FETCH_STATUS,
        payload: fetchStatus
    }
}

const setCitiesFetchStatus = (fetchStatus) => {
    return {
        type: types.SET_CITIES_FETCH_STATUS,
        payload: fetchStatus
    }
}

export {
    addMovie,
    addMovies,
    addCelebrity,
    addCelebrities,
    addCities,
    setIsFetching,
    setMovieFetchStatus,
    setCelebrityFetchStatus,
    setCitiesFetchStatus,
}