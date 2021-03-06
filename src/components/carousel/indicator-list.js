import React from 'react';
import styles from './indicator-list.css';
import cls from 'classnames';
import types from 'prop-types';

export const IndicatorList = ({ count, curIndex, jumpTo, style }) => {

    curIndex = isNaN(Number(curIndex)) ? 0 : Number(curIndex);
    count = isNaN(Number(count)) ? 0 : Number(count);

    const clickHandler = e => {
        const el = e.target;
        if(el && el.nodeName === 'LI'){
            jumpTo(Number(el.getAttribute('data-index')));
        }
    };

    let indicators = Array(count).fill(null);

    indicators = indicators.map((el, index) => {
        const clsName = cls({[styles['indicator']]: true, [styles['indicator-selected']]: index === curIndex});
        return <li className={clsName} data-index={index} key={index}></li>
    });

    return (
        <ul className={styles['indicator-list']} onClick={clickHandler} style={style}>
        {
            indicators
        }
        </ul>
    );
};

IndicatorList.propTypes = {
    count: types.oneOfType([types.number, types.string]).isRequired,
    curIndex: types.oneOfType([types.number, types.string]).isRequired,
    jumpTo: types.func.isRequired,
    style: types.object
}