import React, { Component } from 'react'
import { NavbarDouBan, Carousel, Pivot, PivotItem, Avatar, Cover, Banner } from '../../components'
import { connect } from 'react-redux'
import { getMoviesInTheater } from '../../requests/movie-request'

class Page extends Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { dispatch, currentCity } = this.props

        if(typeof dispatch === 'function') {
            dispatch(getMoviesInTheater(currentCity))
        } else {
            console.log(`init getMOviesInTheater failed, dispatch not availabel`)
        }
    }

    render() {

        const { movies, celebrities } = this.props

        return (
            <div>
                <Carousel autoplay={true} reverse={true} interval={3000} style={{
                    width: '80%',
                    height: '320px'
                }}>
                {
                    Object.keys(movies).map(k => {

                        const m = movies[k]
                        const d = m.directors.map(k => {
                            if(!celebrities[k]) {
                                return {}
                            }
                            
                            return celebrities[k]
                        })
                        const c = m.casts.map(k => {
                            if(!celebrities[k]) {
                                return {}
                            }
                            
                            return celebrities[k]
                        })

                        return (<Banner key={k} movie={m} directors={d} casts={c}/>)
                    })
                }
                </Carousel>
                <Pivot style={{ width: '80%', margin: '0 auto' }}>
                    <PivotItem key={1} title={'pivot-1'}>
                        <div style={{ height: 400, backgroundColor: '#fff' }}>
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg' title='无问西东' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508258043.jpg' title='大世界' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg' title='勇敢者游戏：决战丛林' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508546069.jpg' title='迷镇凶案' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />
                            <Cover src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg' title='太空救援' rating='7.5' style={{ width: 120, margin: '10px 20px' }} />                                        
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

    const { movies, celebrities, currentCity } = state

    return {
        movies,
        celebrities,
        currentCity,
    }
}

export const MoviePage = connect(mapState)(Page)