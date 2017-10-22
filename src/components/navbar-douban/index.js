import React from 'react';
import { NavbarWrapper } from '../navbar-wrapper';
import styles from './index.css';
import fa from 'font-awesome/css/font-awesome.css';

const NavbarDouBan = ({}) => {
    return (
        <NavbarWrapper bgColor='#396'>
            <div className={styles['header-col']}>
                <div className={styles['burger-wrapper']}>
                    <i className={`${fa['fa']} ${fa['fa-bars']} ${fa['fa-2x']}`} />
                </div>
                <span>豆瓣</span>                
            </div>
            <div className={styles['body-col']}>
                <ul>
                    <li><a href='/movie'>电影</a></li>
                    <li><a href='/music'>音乐</a></li>                    
                    <li><a href='/book'>书籍</a></li>
                </ul>
            </div>
            <div>
                
            </div>
        </NavbarWrapper>
    );
};

export { NavbarDouBan };