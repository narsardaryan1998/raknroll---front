import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  true: false, // whether animation should happen only once - while scrolling down
  false: true, // whether elements should animate out while scrolling past them
});
