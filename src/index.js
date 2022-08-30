import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { fetchImages } from './js/fatch-images';
import { renderCardImages } from './js/render-images';
// import NewApiService from './js/fatch-images';

const formSearch = document.querySelector('.search-form');
const buttonSubmit = document.querySelector('.button-form');
const galleryContainerImg = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
// let page = 1;
const perPage = 4;

formSearch.addEventListener('submit', onSearchImages);
loadMoreBtn.addEventListener('click', onLoadMore);

loadMoreBtn.style.display = 'none';
// buttonSubmit.style.display = 'none';

function onSearchImages(e) {
  e.preventDefault();

  query = e.currentTarget.elements.searchQuery.value.trim();

  page = 1;
  clearImagesContainer();

  if (query === '') {
    onResultSearchError();
    return;
  }

  fetchImages(query, page, perPage).then(({ data }) => {
    renderCardImages(data.hits);
    console.log(data.totalHits);
    loadMoreBtn.style.display = 'block';
    page += 1;
  });
}

function onLoadMore() {
  fetchImages(query, page, perPage).then(({ data }) => {
    renderCardImages(data.hits);
    page += 1;
  });
}

function clearImagesContainer() {
  galleryContainerImg.innerHTML = '';
}

function onResultSearchError() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function onСollectionEnded() {
  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}

function onFoundTotalHits() {
  Notiflix.Notify.success(
    'Hooray! We found ${newApiService.totalHits} images.'
  );
}

// ------ Через класс (не доделано) -------
// fetchImages(name, page, perPage)
//   .then(renderCardImages)
//   .catch(error => {
//     if (name !== '') {
//       onFetchError(error);
//     }
//   })
//   .finally(() => form.reset());

// const newApiService = new NewApiService();
// console.log(newApiService);

// formSearch.addEventListener('submit', onSearchImages);
// loadMoreBtn.addEventListener('click', onLoadMore);

// loadMoreBtn.style.display = 'none';

// function onSearchImages(e) {
//   e.preventDefault();

//   newApiService.query = e.currentTarget.elements.searchQuery.value.trim();

//   if (newApiService.query === '') {
//     onResultSearchError();
//     return;
//   }

//   clearImagesContainer();
//   newApiService.resetPage();
//   loadMoreBtn.style.display = 'block';

//   newApiService.fetchArticles().then(images => {
//     renderCardImages(images);
//   });
// }
