import React from 'react';
import styles from './index.css';
import types from 'prop-types';

const NavbarWrapper = ({children, style}) => {

    return (
        <div className={styles['navbar']} style={style}>
        {children}
        </div>
    );
};

export { NavbarWrapper };

NavbarWrapper.propTypes = {
    style: types.object
};