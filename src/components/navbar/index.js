import React from 'react';
import styles from './index.css';
import fa from 'font-awesome/css/font-awesome.css';

const Navbar = ({bgColor, hamburgerColor, children}) => {

    console.log(fa);

    return (
        <div className={styles['navbar']} style={{
            backgroundColor: bgColor
        }}>
            <div className={styles['hamburger-wrapper']}>
                <i className={`${fa['fa']} ${fa['fa-bars']} ${fa['fa-2x']}`} style={{
                    color: hamburgerColor
                }}/>
            </div>
            <div>{children}</div>
        </div>
    );
};

export { Navbar };