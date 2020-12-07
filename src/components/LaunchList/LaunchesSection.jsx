import React from 'react';
import { titleFormatter } from '../../utils/sectionTitleHelper'
import LaunchCard from '../LaunchCard/LaunchCard';
import style from './LaunchesSection.module.scss'
const LaunchesSection = (props) => {
    const title = titleFormatter(props.title);

    return (
        <div>
            <span className={style.title}>
                <span className={style.title__inner}>{title}</span>
            </span>
            {props.launches.map(launch =>
                <LaunchCard launch={launch} key={launch.mission_name}></LaunchCard>
            )}
        </div>
    )
}
export default LaunchesSection;