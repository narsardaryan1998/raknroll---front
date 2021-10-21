import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  useClassNames: false,
  disableMutationObserver: false,
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});
