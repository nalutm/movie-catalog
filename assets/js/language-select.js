import renderMoviesList from "./controller/moviesList-controller.js";
import { pagination } from './pagination.js'

const chooseLanguage = () => {
  document.addEventListener('DOMContentLoaded', () => {
  const $pagination = document.querySelector('[data-movies="pagination"]');
  const pages = Array.from($pagination.children[0].children);
  const $select = document.querySelector('[tabindex="0"]');
  const $options = Array.from($select.children[1].children);
  $options.forEach(option => {
    option.addEventListener('click', (e) => {
      const language = e.target.innerHTML;
      const page = pages.find(page => page.dataset.language === 'active').innerHTML;
        if (language === 'Português') {
          renderMoviesList(page, 'pt-BR');
          pagination.removePagination($pagination);
        } else if (language === 'English') {
          renderMoviesList(page, 'en-US');
          pagination.removePagination($pagination);
        }
    });

    option.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
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
