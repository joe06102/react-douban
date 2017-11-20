import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { IndicatorList } from './indicator-list';
import types from 'prop-types';
import styles from './index.css';

class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = { curIndex: 0 };
        this.jumpTo = this.jumpTo.bind(this);
    }

    jumpTo(index){
        this.setState({curIndex: index});
    }

    initAutomation(){
        
        const { autoplay, interval, reverse, children } = this.props;
        const count = React.Children.count(children);
        
        if(autoplay){
            this.timer = setInterval(() => {

                if(this.state.curIndex >= count - 1){
                    if(reverse){
                        this.step = -1;
                    }
                    else {
                        if(this.step > 0){
                            clearInterval(this.timer);
                            return;
                        }
                    }
                }
                else if(this.state.curIndex <= 0){
                    if(reverse){
                        this.step = 1;
                    }
                    else{
                        if(this.step < 0){
                            clearInterval(this.timer);
                            return;
                        }
                    }
                }

                this.setState({curIndex: this.state.curIndex + this.step});                
            }, interval);
        }
    }

    componentDidMount(){
        this.timer = Date.now();
        this.step = 1;        
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
                            <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(curOpacity, { stiffness: 100, damping: 20 })}}>
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
                    style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)'                        
                    }} />        
            </div>
        );
    }
}

export { Carousel };

Carousel.propTypes = {
    autoplay: types.bool,
    reverse: types.bool,
    style: types.shape({ width: types.string.isRequired, height: types.string.isRequired }).isRequired
}