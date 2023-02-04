import bbScreenshot from "../../assets/screenshots/bb-screenshot.PNG";
import portfolioScreenshot from "../../assets/screenshots/github-screenshot.png";
import cxScreenshot from "../../assets/screenshots/cx-screenshot.png";
import crScreenshot from "../../assets/screenshots/cr-screenshot.png";
import mfScreenshot from "../../assets/screenshots/mf-screenshot.png";

const languages = {
  budgetBreakdown: ["React", "Javascript", "CSS"],
  developerPortfolio: ["React", "Javascript", "CSS"],
  socialMediaApp: ["React", "Javascript", "CSS"],
  cxSite: ["HTML", "CSS", "JavaScript", "PHP"],
  crSite: ["HTML", "CSS", "JavaScript", "PHP"],
  mfSite: ["HTML", "CSS", "JavaScript", "PHP"],
};

const {
  budgetBreakdown,
  developerPortfolio,
  socialMediaApp,
  crSite,
  cxSite,
  mfSite,
} = languages;

const portfolioItems = [
  {
    id: "P1",
    img: { src: bbScreenshot, alt: "Screenshot of Budget Breakdown App" },
    title: "Budget Breakdown",
    description: "Money management tool to help keep track of your expenses.",
    languages: budgetBreakdown,
    link: "#",
    target: "_blank",
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
    target: "",
  },
  {
    id: "P3",
    img: { src: bbScreenshot, alt: "Screenshot of Social Media App" },
    title: "Social Media App",
    description:
      "Will be a simple social media app that allows users to follow, post, like, comment, and direct message.",
    languages: socialMediaApp,
    link: "#",
    target: "_blank",
  },
  {
    id: "P4",
    img: { src: crScreenshot, alt: "Screenshot of Canaan Recycling Website" },
    title: "Canaan Recycling Website",
    description:
      "Company website for Canaan Recycling, a fully diversified, domestic recycling firm.",
    languages: crSite,
    link: "https://canaanrecycling.com/",
    target: "_blank",
  },
  {
    id: "P5",
    img: { src: mfScreenshot, alt: "Screenshot of Millennium Fibers Website" },
    title: "Millennium Fibers Website",
    description:
      "Company website for Canaan Recycling, a fully diversified, international recycling firm.",
    languages: mfSite,
    link: "https://millenniumfibers.com/",
    target: "_blank",
  },
  {
    id: "P6",
    img: { src: cxScreenshot, alt: "Screenshot of Canaan Xpress Website" },
    title: "Canaan Xpress Website",
    description:
      "Company website for Canaan Xpress, a transportation business whose fleet of tractor trailers covers the continental United States.",
    languages: cxSite,
    link: "https://www.canaanxpress.com/index.html",
    target: "_blank",
  },
];

export default portfolioItems;
