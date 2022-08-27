export default class NewApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.perPage = 40;
  }

  fetchArticles() {
    console.log('До запроса: ', this);

    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '29504531-9bab283f8cb4291b644273701';
    return fetch(
      `${BASE_URL}?key=${KEY}&q=${this.query}=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
    )
      .then(r => r.json())
      .then(data => {
        this.incrementPage();

        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
}

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29504531-9bab283f8cb4291b644273701';

// async function fetchImages(name, page, perPage) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log('ERROR: ' + error);
//   }
// }

// async function fetchImages(name, page, perPage) {
//   return (response = await axios
//     .get(
//       '${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`'
//     )
//     .then(res => {
//       console.log(res.data);
//     }));
// }

// export { fetchImages };
