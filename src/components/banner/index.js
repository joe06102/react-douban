import React from 'react'
import styles from './index.css'
import { RatingBar } from '../rating-bar'
import { Avatar } from '../avatar'

export const Banner = ({ movie, directors, casts, style, }) => {
    return (
        <div className={styles.wrap} style={style}>
            <div className={styles.glass} style={{ backgroundImage: `url(${movie.cover})` }}></div>
            <div className={styles.col}>
                <img className={styles.cover} alt={movie.title} src={movie.cover} />
            </div>
            <div className={`${styles.col} ${styles['paper-wrap']}`}>
                <div className={styles.paper}>
                    <div className={styles['paper-col']}>
                        <h3>{`《${movie.title}》`}</h3>
                        <p>
                            <strong>别名：</strong>
                            <span>{movie.title_origin}</span>
                        </p>                        
                        <p>
                            <strong>类型：</strong>
                            <span>{movie.genres.join(' / ')}</span>
                        </p>
                        <p>
                            <strong>年份：</strong>
                            <span>{movie.year}</span>
                        </p>
                        <p style={{ margin: 0 }}><strong>豆瓣评分</strong></p>
                        <RatingBar rating={movie.rating} />      
                    </div>
                    <div className={styles['paper-col']}>
                        <div>
                            <p>
                                <strong>导演：</strong>
                                <span>{directors.map(d => <a href={d.url}>{d.name}</a>)}</span>
                            </p>
                        </div>
                        <div>
                            <p><strong>演员</strong></p>
                            <div>
                            {
                                Array.isArray(casts) && casts.map(d => {
                                    return <Avatar key={d.id} src={d.avatar} alt={d.name} style={{ width: 90, height: 128, margin: 8 }}/>
                                })
                            }
                            </div>
                        </div>
                    </div>                
                </div>            
            </div>
        </div>
    )
}