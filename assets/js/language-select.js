import renderMoviesList from "./controller/moviesList-controller.js";
import { pagination } from './pagination.js'

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
      const languageOption = e.target.innerHTML;
      const language = languageOption !== 'Português' ? 'en-US' : 'pt-BR';
      const $checkbox = document.querySelector('[data-movie="show-favorite"]');
      $checkbox.classList.remove('input-chk');
      const page = pages.find(page => page.dataset.language === 'active').innerHTML;
      pagination.removePagination($pagination);
      renderMoviesList(page, language);
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
