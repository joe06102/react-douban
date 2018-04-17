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

export { getMoviesInTheater, getMoviesComingSoon }


// {
//     id: m.id,
//     title: m.title,
//     title_origin: m.original_title,
//     aka: m.aka || '',
//     year: m.year || '',
//     genres: m.genres || [],
//     summary: m.summary || '',
//     countries: m.countries,
//     directors: m.directors && m.directors.map(d => d.id) || [],
//     casts: m.casts && m.casts.map(c => c.id) || [],
//     share_url: m.share_url || '',
//     rating: m.rating.average,
//     cover: m.images.large,
//     rating_count: m.ratings_count,
//     comment_count: m.comments_count,
//     collect_count: m.collect_count,
//     review_count: m.reviews_count,
//     wish_count: m.wish_count,
// }