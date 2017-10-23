import React from 'react';
import { NavbarWrapper } from '../navbar-wrapper';
import styles from './index.css';
import fa from 'font-awesome/css/font-awesome.css';
import cls from 'classnames';
import { Link } from 'react-router-dom';

const win = window;

const NavbarDouBan = ({context}) => {

    const burgerCls = cls(fa['fa'], fa['fa-bars'], fa['fa-2x'], styles['burger-menu']);
    const headerCls = cls(styles['col'], styles['header-col']);
    const bodyCls = cls(styles['col'], styles['body-col']);

    return (
        <NavbarWrapper bgColor='#396' className={styles.root}>
            <div className={headerCls}>
                <div className={styles['burger-wrapper']}>
                    <i className={burgerCls} />
                </div>
                <h4 className={styles['title-douban']}>豆瓣</h4>                
            </div>
            <div className={bodyCls}>
                <ul className={styles['menu']}>
                    <li className={styles['menu-item']}><Link className={styles['menu-item-link']} to='/movie'>电影</Link></li>
                    <li className={styles['menu-item']}><Link className={styles['menu-item-link']} to='/music'>音乐</Link></li>                    
                    <li className={styles['menu-item']}><Link className={styles['menu-item-link']} to='/book'>书籍</Link></li>
                </ul>
            </div>
        </NavbarWrapper>
    );
};

export { NavbarDouBan };