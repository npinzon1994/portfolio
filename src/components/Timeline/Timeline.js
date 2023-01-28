import React from "react";
import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const Timeline = (props) => {
  return (
    <div className={classes.container}>
      <h3>Timeline</h3>
      <ul className={classes.timeline}>
        <TimelineItem
          startingYear="2016"
          title="Computer Science Student"
          yearsWorked="4"
          description={description}
        />
        <TimelineItem
          startingYear="2016"
          title="Computer Science Student"
          yearsWorked="4"
          description={description}
        />
        <TimelineItem
          startingYear="2016"
          title="Computer Science Student"
          yearsWorked="4"
          description={description}
        />
      </ul>
    </div>
  );
};

export default Timeline;
