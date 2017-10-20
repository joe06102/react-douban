import { Url } from '../utils/url';
import { Logger } from '../utils/logger';
import { BaseService } from './base-service';
import { FetchFactory } from './factory';

export class MovieService extends BaseService {
    
    constructor(){
        super();
        this.resource = 'movie';
        this.path = Url.resolve(this.version, this.resource);
        this.movieFetchFactory = new FetchFactory(this.path);
    }

    fetchMovieById(id){
        return this.movieFetchFactory.fetchByIdFactory('subject', 'fetchMovieById')(id);
    }

    fetchCelebrityById(id){
        return this.movieFetchFactory.fetchByIdFactory('celebrity', 'fetchCelebrityById')(id);
    }
    
    fetchMoviesInTheater(queryStringDict){
        return this.movieFetchFactory.fetchByResourceFactory('in_theaters', 'fetchMoviesInTheater')(queryStringDict);
    }

    fetchMoviesComingSoon(queryStringDict){
        return this.movieFetchFactory.fetchByResourceFactory('coming_soon', 'fetchMoviesComingSoon')(queryStringDict);
    }

    fetchMoviesOfUSBoxOffice(queryStringDict){
        return this.movieFetchFactory.fetchByResourceFactory('us_box', 'fetchMoviesOfUSBoxOffice', queryStringDict);
    }

    fetchTop250MoviesOfDouban(queryStringDict){
        return this.movieFetchFactory.fetchByResourceFactory('top250', 'fetchTop250MoviesOfDouban', queryStringDict);
    }
}