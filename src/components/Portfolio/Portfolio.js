import React from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";

const items = portfolioItems.map((item) => (
  <PortfolioItem
    key={item.id}
    img={item.img}
    title={item.title}
    description={item.description}
    languages={item.languages}
    link={item.link}
    target={item.target}
  />
));

const Portfolio = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.portfolio}>{items}</ul>
    </div>
  );
};

export default Portfolio;
