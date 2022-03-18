// import { header } from './header.js';
// import { main } from './main.js';
import { footer } from './footer.js';

// const rootDiv = document.getElementById('root');

function homeUser() {
//   header();
//  main();
  console.log('footer', footer());
  footer();
}
console.log('homeuser', homeUser);

// homeUser();

export default {
  renderElement: () => homeUser,
};
