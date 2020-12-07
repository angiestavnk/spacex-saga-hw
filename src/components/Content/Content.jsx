import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../ErrorPage/ErrorPage';
import LaunchesSection from '../LaunchList/LaunchesSection';
import Loading from '../Loading/Loading';
import style from './Content.module.scss'
import { fetchLaunches } from '../../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    const [offset, setOffset] = useState(6);
    const dispatch = useDispatch();
    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.loading);
    const launches = useSelector((state) => {
        return Object.entries(state.launches);
    })
    useEffect(() => dispatch(fetchLaunches(0)), [])

    const getHistoryLaunches = () => {
        dispatch(fetchLaunches(offset))
        setOffset(offset + 6);
    }
    if (loading) {
        return (
            <div className={style.content} >
                <Loading />
            </div>
        )
    }
    if (error) {
        return (
            <div className={style.content} >
                <ErrorPage />
            </div>
        )
    }
    return (
        <div className={style.content}>
            <div className={style.content__list}>
                {Object.values(launches).map(section => {
                    return (<LaunchesSection title={section[0]} launches={section[1]} key={section[0]} />)
                })}
            </div>
            <div className={style.more}>
                <button onClick={getHistoryLaunches} className={style.more_button}>
                    <FontAwesomeIcon icon={faBars} /> SEE MORE
                </button>
            </div>
        </div>
    )
}

export default Content;