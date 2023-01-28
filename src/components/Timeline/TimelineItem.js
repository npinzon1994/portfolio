import React from 'react';
import classes from './TimelineItem.module.css';

const TimelineItem = props => {
    return <li className={classes['list-item']}>
        <div className={classes['info-container']}>
            <span className={classes.year}>{props.year}</span>
            <span className={classes.title}>{props.title}</span>
            <span className={classes.duration}>{props.duration}</span>
        </div>
        <div>
            <span className={classes.description}>{props.description}</span>
        </div>
    </li>
}

export default TimelineItem;