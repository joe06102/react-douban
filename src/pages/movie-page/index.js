import React, { Component } from 'react'
import { NavbarDouBan, Carousel, Pivot, PivotItem, Avatar, Cover, Banner } from '../../components'
import { connect } from 'react-redux'

class Page extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {

        const { movies } = this.props

        console.log(movies)

        return (
            <div>
                <Carousel autoplay={true} reverse={true} interval={3000} style={{
                    width: '80%',
                    height: '300px'
                }}>
                {
                    Object.keys(movies).map(k => {
                        return <Banner movie={movies[k]} />
                    })
                }
                </Carousel>
                <Pivot style={{ width: '80%', margin: '0 auto' }}>
                    <PivotItem title={'pivot-1'}>
                        <div style={{ height: 400, backgroundColor: '#fff' }}>
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg' title='无问西东' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508258043.jpg' title='大世界' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg' title='勇敢者游戏：决战丛林' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508546069.jpg' title='迷镇凶案' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg' title='太空救援' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />                                        
                        </div>
                    </PivotItem>
                    <PivotItem title={'pivot-2'}><div style={{ height: 200, backgroundColor: '#3c9' }}>this is pivot-item-2</div></PivotItem>
                    <PivotItem title={'pivot-3'}><div style={{ height: 200, backgroundColor: '#3cc' }}>this is pivot-item-3</div></PivotItem>
                </Pivot>                     
            </div>             
        )        
    } 
}

const mapState = state => {

    const { movies } = state

    return {
        movies
    }
}

const mapDispatch = dispatch => {
    return {

    }
}

export const MoviePage = connect(mapState, mapDispatch)(Page)