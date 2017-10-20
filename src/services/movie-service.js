import { Url } from '../utils/url';
import { Logger } from '../utils/logger';
import { BaseService } from './base-service';
import { FetchFactory } from './factory';

export class MovieService extends BaseService {
    
    constructor(){
        super();
        this.resource = 'movie';
        this.path = Url.resolve(this.version, this.resource);
    }

    fetchMovieById(id){
        return FetchFactory.fetchByIdFactory('subject', 'fetchMovieById')(id);
    }

    fetchCelebrityById(id){
        return FetchFactory.fetchByIdFactory('celebrity', 'fetchCelebrityById')(id);
    }
    
    fetchMoviesInTheater(queryStringDict){
        return FetchFactory.fetchByResourceFactory('in_theaters', 'fetchMoviesInTheater')(queryStringDict);
    }

    fetchMoviesComingSoon(queryStringDict){
        return FetchFactory.fetchByResourceFactory('coming_soon', 'fetchMoviesComingSoon')(queryStringDict);
    }

    fetchMoviesOfUSBoxOffice(queryStringDict){
        return FetchFactory.fetchByResourceFactory('us_box', 'fetchMoviesOfUSBoxOffice', queryStringDict);
    }

    fetchTop250MoviesOfDouban(queryStringDict){
        return FetchFactory.fetchByResourceFactory('top250', 'fetchTop250MoviesOfDouban', queryStringDict);
    }
}