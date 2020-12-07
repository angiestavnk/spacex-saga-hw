import React from 'react';
import errorImg from '../../assets/error.png'
import style from './ErrorPage.module.scss'
const ErrorPage = () => {
    return (
        <div className={style.error}>
            <img src={errorImg} className={style.error__image}></img>
            <figcaption className={style.error__text}>Ooops! Something went wrong, Please try<br /> again later.</figcaption>
        </div>
    )
}

export default ErrorPage;