import React from 'react';
import styles from './index.css';

const NavbarWrapper = ({bgColor, children}) => {
    return (
        <div className={styles['navbar']} style={{
            backgroundColor: bgColor || '#fff'
        }}>
        {children}
        </div>
    );
};

export { NavbarWrapper };