import React from 'react';
import styles from './pivot-header.css';

export const PivotHeader = ({ titles, curPivotIndex, changeToPivotOfIndex }) => {
    
    titles = titles || [];
    
    return (
        <ul className={styles['header-list']}>
        {
            titles.map((title, index) => {
                return (
                    <li key={title} 
                        className={`${styles['title-wrap']} ${index === curPivotIndex ? styles['title-wrap-selected']: ''}`}
                        onClick={ e => {
                        typeof changeToPivotOfIndex === 'function' && changeToPivotOfIndex(index);
                    }}>
                        <h5 className={styles['title']}>{title}</h5>
                    </li>);
            })
        }
        </ul>
    );
};