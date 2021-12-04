import AOS from "aos";
import "aos/dist/aos.css";

export default ({app}) => {
  app.AOS = new AOS.init({
    once: true,// whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  }); // or any other options you need
};
