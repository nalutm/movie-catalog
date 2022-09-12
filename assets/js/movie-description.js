export const createMovieDescription = (description) => {
  const $description = document.createElement('p');
  $description.classList.add('movie__description');
  if(!description.length) $description.innerHTML = 'Não temos sinopse do filme';
  else $description.innerHTML = description;

  return $description;
}
