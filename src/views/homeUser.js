import { header } from './header.js';
import { main } from './main.js';
import { footer } from './footer.js';

// const rootDiv = document.getElementById('root');

function homeUser() {
  const headerEl = header();
  const mainEl = main();
  const footerEl = footer();

  return [headerEl, mainEl, footerEl];

  // const wrapperEl = document.createElement('div');
  // wrapperEl.appendChild(headerEl);
  // wrapperEl.appendChild(mainEl);
  // wrapperEl.appendChild(footerEl);
  // return wrapperEl;
}

export default {
  renderElements: () => homeUser(),
};
