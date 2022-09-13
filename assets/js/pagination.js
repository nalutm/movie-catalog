const active = 'active';

const addPagination = (pagination, page, pages, language) => {
  pagination.classList.add(active);
  pages.forEach(page => {
    page.setAttribute('data-language', language);
    if (page.classList.contains(active)) {
      page.classList.remove(active);
      page.dataset.language = '';
    } 
  });
  const currentPage = pages.find(item => {
    return item.getAttribute('data-page') === page.toString()
  });
  currentPage.classList.add(active);
  currentPage.setAttribute('data-language', 'active');
}

const removePagination = (pagination) => {
  pagination.classList.remove(active);
}

export const pagination = {
  addPagination,
  removePagination,
}
