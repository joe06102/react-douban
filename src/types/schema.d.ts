declare namespace Tables {

    export class Celebrity {
        id: string
        name: string
        name_en: string
        aka: string[]
        aka_en: string[]
        born_place: string
        works: string[]
        avatar: string
        url: string
    }

    export class Movie {
        id: string
        title: string
        title_origin: string
        aka: string[]
        year: string
        genres: string[]
        summary: string
        countries: string[]
        directors: string[]
        casts: string[]
        share_url: string
        rating: number
        cover: string
        rating_count: number
        comment_count: number
        collect_count: number
        review_count: number
        wish_count: number
    }

    export class City {
        id: string
        name: string
        name_full: string
        location: {
            lat: number
            lng: number
        }
    }

}