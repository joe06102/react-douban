import React from 'react'
import { Carousel } from '../carousel'
import { Loading } from '../loading-wrapper'

const CarouselWithLoading = props => {

    const Wrapper = Loading(Carousel)

    return (
        <Wrapper { ...props }/>
    )
}

export { CarouselWithLoading }