import espeon from "../../assets/espeon.jpg";
import flareon from "../../assets/flareon.jpg";
import glaceon from "../../assets/glaceon.jpg";

const languages = {
  budgetBreakdown: ["React", "Javascript", "CSS"],
  developerPortfolio: ["React", "Javascript", "CSS"],
  socialMediaApp: ["React", "Javascript", "CSS"],
};

const { budgetBreakdown, developerPortfolio, socialMediaApp } = languages;

const portfolioItems = [
  {
    id: "P1",
    img: { src: espeon, alt: "Screenshot of Budget Breakdown App" },
    title: "Budget Breakdown",
    languages: budgetBreakdown,
  },
  {
    id: "P2",
    img: { src: flareon, alt: "Screenshot of Developer Portfolio App" },
    title: "Developer Portfolio",
    languages: developerPortfolio,
  },
  {
    id: "P3",
    img: { src: glaceon, alt: "Screenshot of Social Media App" },
    title: "Social Media App",
    languages: socialMediaApp,
  },
];

export default portfolioItems;
