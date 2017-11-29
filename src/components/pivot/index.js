import React, { Component } from 'react';
import { PivotHeader } from './pivot-header';
import { PivotItem } from './pivot-item';
import style from './index.css';

export class Pivot extends Component{

    constructor(props){
        super(props);

        this.state = {
            curPivot: 0
        }
    }

    changePivotToIndex = (index) => {
        this.setState({ curPivot: index });
    }

    render() {

        const { children } = this.props;
        const titles = React.Children.map(children, el => el.props.title);

        return (
            <div>
                <PivotHeader titles={titles} curPivotIndex={this.state.curPivot} changeToPivotOfIndex={this.changePivotToIndex}/>
                <div className={style['pivotitem-container']}>
                {
                    React.Children.map(children, (child, index) => {
                        var el = React.cloneElement(child, { style: { ...child.props.style, display: index === this.state.curPivot ? 'block' : 'none' } });
                        return el;
                    })
                }
                </div>
            </div>
        );
    }
}