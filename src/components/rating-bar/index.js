import React from 'react'

export const RatingBar = ({rating, styles}) => {

    rating = Number(rating)

    return (
        <div style={styles}>
            <strong style={{
                color: '#333',
                fontWeight: 'bold',
                fontSize: '40px',         
            }}>
                {rating}
            </strong>
            <i style={{
                backgroundImage: 'url("https://img3.doubanio.com/f/shire/ee7f53d76c3f8ed4991bdbafdb9b2c90c0aedfef/pics/rating_icons/ic_rating_m@2x.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: `0 -${Math.ceil(10 - rating) * 30}px`,
                display: 'inline-block',
                verticalAlign: 'bottom',
                margin: 10,
                width: 150,
                height: 30
            }}></i>
        </div>
    )
}