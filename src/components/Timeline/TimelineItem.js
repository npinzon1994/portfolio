import React from 'react';
import classes from './TimelineItem.module.css';

const TimelineItem = props => {
    return <li className={classes['list-item']}>
        <div>
            <span>{props.startingYear}</span>
            <span>{props.title}</span>
            <span>{props.yearsWorked}</span>
        </div>
        <div>
            <span>{props.description}</span>
        </div>
    </li>
}

export default TimelineItem;