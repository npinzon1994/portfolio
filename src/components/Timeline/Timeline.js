import React from "react";
import timelineItems from "./timeline-items";
import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

const items = timelineItems.map((item) => (
  <TimelineItem
    year={item.year}
    title={item.title}
    duration={item.duration}
    description={item.description}
  />
));

const Timeline = (props) => {
  return (
    <div className={classes.container}>
      <h2>Timeline</h2>
      <ul className={classes.timeline}>{items}</ul>
    </div>
  );
};

export default Timeline;
