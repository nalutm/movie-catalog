import renderMoviesList from "./controller/moviesList-controller.js";
import { pagination } from './pagination.js'
// import { pages } from "./controller/moviesList-controller.js";

const chooseLanguage = () => {
  document.addEventListener('DOMContentLoaded', () => {
  const $checkbox = document.querySelector('[data-movie="show-favorite"]');
  if ($checkbox.classList.contains('input-chk')) $checkbox.classList.remove('input-chk');

  const $pagination = document.querySelector('[data-movies="pagination"]');
  const pagesLi = Array.from($pagination.children[0].children); 
  const pages = pagesLi.map(pageLi => pageLi.children[0]);

  const $select = document.querySelector('[tabindex="0"]');
  const $options = Array.from($select.children[1].children);
  $options.forEach(option => {
    option.addEventListener('click', (e) => {
      const language = e.target.innerHTML;
      const $checkbox = document.querySelector('[data-movie="show-favorite"]');
      $checkbox.classList.remove('input-chk');
      const page = pages.find(page => page.dataset.language === 'active').innerHTML;
        if (language === 'Português') {
          pagination.removePagination($pagination);
          renderMoviesList(page, 'pt-BR');
        } else if (language === 'English') {
          pagination.removePagination($pagination);
          renderMoviesList(page, 'en-US');
        }
    });

    option.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const $checkbox = document.querySelector('[data-movie="show-favorite"]');
        $checkbox.classList.remove('input-chk');
        const language = e.target.innerHTML;
        const page = pages.find(page => page.dataset.language === 'active').innerHTML;
          if (language === 'Brasil') {
            renderMoviesList(page, 'pt-BR');
          } else if (language === 'Estados Unidos') {
            renderMoviesList(page, 'en-US');
          }
      }
    });
    
  })
})
}

export default chooseLanguage;
