import { MovieService } from '../services/movie-service'

const service = new MovieService()

const getMoviesInTheater = (city = '杭州', count = 10) => {

    const qs = {
        city: city,
        count: count
    }

    return service.fetchMoviesInTheater(qs)
}

const getMoviesComingSoon = (city = '杭州', count = 10) => {
    
    const qs = {
        city: city,
        count: count
    }

    return service.fetchMoviesComingSoon(qs)
}

const getMovieDetails = id => {
    return service.fetchMovieById(id)
}

export { getMoviesInTheater, getMoviesComingSoon, getMovieDetails }