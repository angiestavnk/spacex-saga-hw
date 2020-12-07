import React from 'react';
import style from './LoadingCard.module.scss'
import ava from '../../assets/rect.png'
const LoadingCard = () => {
    return (
        <div className={style.loading}>
            <div className={style.loading__image}>
                <img className={style.loading__image_inner} src={ava}></img>
            </div>
            <div className={style.loading__content}>
                <div className={style.loading__items}>
                    <div className={style.loading__items_title}></div>
                    <div className={style.loading__items_status}></div>
                </div>
                <div className={style.loading__date}></div>
                <div className={style.loading__text}></div>
                <div className={style.loading__text}></div>
            </div>
        </div>
    )
}

export default LoadingCard;