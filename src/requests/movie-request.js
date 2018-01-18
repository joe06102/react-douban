import * as actions from '../actions/action-creators'
import { MovieService } from '../services/movie-service'

const service = new MovieService()

const getMoviesInTheater = (city = '杭州', count = 10) => {

    const qs = {
        city: city,
        count: count
    }

    return (dispatch, getState) => {

        service.fetchMoviesInTheater(qs).then(res => {
        
            const data = res.subjects || []
            let celebs = []
            const movies = data.map(m => {

                const directors = (m.directors || []).map(d => {
                    return {
                        id: d.id,
                        name: d.name,
                        avatar: d.avatars.large,
                        url: d.alt
                    }
                })

                const casts = (m.casts || []).map(c => {
                    return {
                        id: c.id,
                        name: c.name,
                        avatar: c.avatars.large                        
                    }
                })

                celebs = celebs.concat(directors, casts)

                return {
                    id: m.id,
                    title: m.title,
                    title_origin: m.original_title,
                    year: m.year,
                    genres: m.genres,
                    directors: directors.map(d => d.id),
                    casts: casts.map(c => c.id),
                    rating: m.rating.average,
                    cover: m.images.large,
                    collect_count: m.collect_count
                }
            })
    
            if(typeof dispatch === 'function') {
                dispatch(actions.addMovies(movies))
                dispatch(actions.addCelebrities(celebs))
            }
            else {
                console.log(`getMoviesInTheater failed, dispatch is not a function`)
            }                 
        })
    }
}

export { getMoviesInTheater }


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