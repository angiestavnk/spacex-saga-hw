import React from 'react';
import style from './Header.module.scss';
import elonPhoto from '../../assets/musk.png'
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo} >
                <img src={logo}></img>
            </div>
            <div className={style.header__author}>
                <span className={style.header__authorName}>Created by: A. Stavniiciuc</span>
                <div className={style.header__authorPhoto}> <img className={style.header__authorPhoto__img} src={elonPhoto} /> </div>
            </div>
        </header >
    )
}

export default Header;