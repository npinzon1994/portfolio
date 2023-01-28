import React from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";

const items = portfolioItems.map((item) => (
  <PortfolioItem
    key={item.id}
    img={item.img}
    title={item.title}
    languages={item.languages}
  />
));

const Portfolio = (props) => {
  return <div className={classes.portfolio}>{items}</div>;
};

export default Portfolio;
