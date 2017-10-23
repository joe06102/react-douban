import React from 'react';
import styles from './index.css';
import cls from 'classnames'

const NavbarWrapper = ({bgColor, children, className}) => {

    const wrapperCls = cls(className, styles['navbar']);

    return (
        <div className={wrapperCls} style={{
            backgroundColor: bgColor || '#fff'
        }}>
        {children}
        </div>
    );
};

export { NavbarWrapper };