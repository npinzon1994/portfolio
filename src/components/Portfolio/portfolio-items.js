import bbScreenshot from "../../assets/bb-screenshot.PNG";
import portfolioScreenshot from "../../assets/portfolio-screenshot.png";

const languages = {
  budgetBreakdown: ["React", "Javascript", "CSS"],
  developerPortfolio: ["React", "Javascript", "CSS"],
  socialMediaApp: ["React", "Javascript", "CSS"],
};

const { budgetBreakdown, developerPortfolio, socialMediaApp } = languages;

const portfolioItems = [
  {
    id: "P1",
    img: { src: bbScreenshot, alt: "Screenshot of Budget Breakdown App" },
    title: "Budget Breakdown",
    description: "Money management tool to help keep track of your expenses.",
    languages: budgetBreakdown,
    link: "#",
    target: '_blank'
  },
  {
    id: "P2",
    img: {
      src: portfolioScreenshot,
      alt: "Screenshot of Developer Portfolio App",
    },
    title: "Developer Portfolio",
    description:
      "Professional developer portfolio that showcases my projects as well as a glimpse into my coding journey.",
    languages: developerPortfolio,
    link: "#",
    target: ''
  },
  {
    id: "P3",
    img: { src: bbScreenshot, alt: "Screenshot of Social Media App" },
    title: "Social Media App",
    description: "Will be a simple social media app that allows users to follow, post, like, comment, and direct message.",
    languages: socialMediaApp,
    link: "#",
    target: '_blank'
  },
];

export default portfolioItems;
