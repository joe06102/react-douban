import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { IndicatorList } from './indicator-list';
import types from 'prop-types';
import styles from './index.css';

class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = { curIndex: 0 };
        this.count = 0;
        this.timer = Date.now();
        this.step = 1;
        this.jumpTo = this.jumpTo.bind(this);
    }

    jumpTo(index){
        this.setState({curIndex: index});
    }

    initAutomation(){
        
        const { autoSlide, interval } = this.props;
        
        if(autoSlide){
            this.timer = setInterval(() => {
                if(this.state.curIndex >= this.count - 1){
                    if(this.props.reverse){
                        this.step = -1;
                    }
                    else{
                        clearInterval(this.timer);
                    }
                }
                else if(this.state.curIndex <= 0){
                    if(this.props.reverse){
                        this.step = 1;
                    }
                    else{
                        clearInterval(this.timer);
                    }
                }
                this.setState({curIndex: this.state.curIndex + this.step});                
            }, interval);
        }
    }

    componentDidMount(){
        this.count = React.Children.count(this.props.children);
        this.initAutomation();
    }

    componentDidUnMount(){
        clearInterval(this.timer);
    }

    render(){

        const { style } = this.props;

        return (
            <div className={styles['carousel-wrapper']} style={style}>
                {
                    React.Children.map(this.props.children, (el, index) => {

                        const curOpacity = index === this.state.curIndex ? 1 : 0;
                        const curVisible = index === this.state.curIndex ? 'visible' : 'collapse';

                        return (
                            <Motion style={{opacity: spring(curOpacity, { stiffness: 100, damping: 20 })}}>
                            {
                                values => {

                                    let cloneEl;

                                    if(values.opacity === curOpacity){
                                        cloneEl = React.cloneElement(el, { 
                                            style: { 
                                                ...el.props.style, 
                                                opacity: values.opacity, 
                                                visibility: curVisible,
                                                display: 'inline-block',
                                                verticalAlign: 'top',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0
                                            }
                                        });
                                    }
                                    else{
                                        //visibilty must be set to visible at the begining of the animation
                                        //otherwise the animation won't be continuous. 
                                        cloneEl = React.cloneElement(el, { 
                                            style: { 
                                                ...el.props.style, 
                                                opacity: values.opacity, 
                                                visibility: 'visible',
                                                display: 'inline-block',
                                                verticalAlign: 'top',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0                                                                                                
                                            } 
                                        });
                                    }

                                    return cloneEl;
                                }
                            }
                            </Motion>
                        );  
                    })
                }
                <IndicatorList 
                    count={React.Children.count(this.props.children)} 
                    curIndex={this.state.curIndex} 
                    jumpTo={this.jumpTo} 
                    className={styles['carousel-indicators']} />        
            </div>
        );
    }
}

export { Carousel };

Carousel.propType = {
    autoSlide: types.bool,
    reverse: types.bool,
    style: types.objectOf(types.shape({ width: types.string.isRequired, height: types.string.isRequired })).isRequired
}