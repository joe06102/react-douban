import React, { Component } from 'react'
import { NavbarDouBan, Carousel, Pivot, PivotItem, Avatar, Cover, Banner, CarouselWithLoading } from '../../components'
import { connect } from 'react-redux'
import * as types from '../../actions/action-types'

class Page extends Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { dispatch } = this.props

        if(typeof dispatch === 'function') {
            dispatch({ type: types.ADD_MOVIE_IN_THEATER_ASYNC })
            dispatch({ type: types.ADD_MOVIE_COMING_SOON_ASYNC })            
        } else {
            console.log(`init getMOviesInTheater failed, dispatch not availabel`)
        }
    }

    render() {

        const { mvs_in_theater, mvs_coming_soon, loading } = this.props
        const { bannerLoading } = loading

        return (
            <div>
                <CarouselWithLoading loading={bannerLoading} autoplay={false} reverse={true} interval={3000} style={{
                    width: '80%',
                    height: '320px',
                    margin: '0 auto',
                }}>
                {
                    Object.keys(mvs_in_theater).map(k => {

                        const m = mvs_in_theater[k]
                        const d = m.directors
                        const c = m.casts

                        return (<Banner key={k} movie={m} directors={d} casts={c}/>)
                    })
                }
                </CarouselWithLoading>
                <Pivot style={{ width: '80%', margin: '0 auto' }}>
                    <PivotItem key={1} title={'pivot-1'}>
                        <div style={{ height: 400, backgroundColor: '#fff' }}>
                        {
                            mvs_coming_soon.map(mv => (
                                <Cover src={mv.images.large} title={mv.title} rating={mv.rating.average} style={{ width: 120, margin: '10px 20px' }} />
                            ))
                        }
                            {/* <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg' title='无问西东' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508258043.jpg' title='大世界' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg' title='勇敢者游戏：决战丛林' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508546069.jpg' title='迷镇凶案' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg' title='太空救援' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />                                         */}
                        </div>
                    </PivotItem>
                    <PivotItem key={2} title={'pivot-2'}><div style={{ height: 200, backgroundColor: '#3c9' }}>this is pivot-item-2</div></PivotItem>
                    <PivotItem key={3} title={'pivot-3'}><div style={{ height: 200, backgroundColor: '#3cc' }}>this is pivot-item-3</div></PivotItem>
                </Pivot>                     
            </div>             
        )        
    } 
}

const mapState = state => {

    const { movies, celebrities, currentCity, loading, in_theater, coming_soon } = state
    const mvs_in_theater = in_theater.map(id => movies[id])
    const mvs_coming_soon = coming_soon.map(id => movies[id])

    return {
        mvs_in_theater,
        mvs_coming_soon,
        celebrities,
        currentCity,
        loading
    }
}

export const MoviePage = connect(mapState)(Page)