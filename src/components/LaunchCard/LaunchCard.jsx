import React from 'react';
import { changeClassName } from '../../utils/classNameHelper';
import { isSuccess } from '../../utils/isSuccessHelper';
import style from './LaunchCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { dateFormatter } from '../../utils/dateFormatter';
const LaunchCard = ({ launch }) => {
    const missionStatus = isSuccess(launch.launch_success)
    const status = changeClassName(missionStatus)
    const date = dateFormatter(launch.launch_date_unix);
    return (
        <div className={style.launches}>
            <div className={style.launches__image}>
                <img className={style.launches__image_inner} src={launch.links.mission_patch} alt="No image"></img>
            </div>
            <div className={style.launches__content}>
                <div className={style.launches__items}>
                    <div className={style.launches__items_title}>
                        <span className={style.launches__items_title_number}> #{launch.flight_number} </span>
                        <span className={style.launches__items_title_name}>{launch.mission_name} </span>
                    </div>
                    <div className={status}>{missionStatus}</div>
                </div>
                <div className={style.launches__content_icons}>
                    <span className={style.launches__content_icons_link}>
                        <a href={launch.links.article_link}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: '#e0e0e0' }} />
                        </a>
                    </span>
                    <span className={style.launches__content_icons_video}>
                        <a href={launch.links.video_link}>
                            <FontAwesomeIcon icon={faPlayCircle} style={{ color: '#D50000' }} />
                            WATCH
                        </a>
                    </span>
                </div>
                <div className={style.launches__date}>Launch date: {date}</div>
                <div className={style.launches__text}>{launch.details}</div>
                {/* <div className={style.launches__text}></div> */}
            </div>
        </div>
    )
}

export default LaunchCard;