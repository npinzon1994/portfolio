import React from "react";
import timelineItems from "./timeline-items";
import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import Title from "../UI/Title";

const items = timelineItems.map((item) => (
  <TimelineItem
    key={item.id}
    year={item.year}
    title={item.title}
    duration={item.duration}
    description={item.description}
  />
));

const Timeline = (props) => {
  return (
    <div className={classes.container}>
      <Title title="Timeline" style={{'margin-left': 20}}/>
      <ul className={classes.timeline}>{items}</ul>
    </div>
  );
};

export default Timeline;
