import { createContainer } from "./container.js";

export const createImg = (src, alt = null, className = null) => {
  const $img = document.createElement('img');
  if (typeof className === 'string') $img.classList.add(className);
  if (Array.isArray(className)) $img.classList.add(className.join(' '));
  $img.setAttribute('alt', alt);
  $img.setAttribute('src', src);

  return $img;
}

export const createMoviePoster = (src) => {
  const $movieImg = createImg(src, 'Cartaz do filme', 'movie-card__img');

  return createContainer('imgContainer', 'movie-card__img-container', $movieImg);
}
