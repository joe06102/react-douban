import React from 'react'

export const Banner = ({ movie, style }) => {
    return (
        <div style={style}>
            <img alt={movie.title} src={movie.cover} />
            <div>
                <h3>{movie.title}</h3>
                <h4>{movie.directors.join(' / ')}</h4>
                <p>{movie.genres.join(' / ')}</p>
                <p>{movie.summary}</p>
            </div>
            <div>
                <div>
                    <p>豆瓣评分</p>
                    <div>
                        <label>{movie.rating}</label>
                        <i></i>
                    </div>
                </div>
                <div>
                {
                    movie.casts
                }
                </div>
            </div>
        </div>
    )
}