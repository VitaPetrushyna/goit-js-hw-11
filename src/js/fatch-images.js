import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29504531-9bab283f8cb4291b644273701';

async function fetchImages(query, page, perPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchImages };

// ----------- Класс -----------
// export default class NewApiService {
//   constructor() {
//     this.query = '';
//     this.page = 1;
//     this.perPage = 40;
//   }

//   fetchArticles() {
//     console.log('До запроса: ', this);

//     const BASE_URL = 'https://pixabay.com/api/';
//     const KEY = '29504531-9bab283f8cb4291b644273701';
//     return fetch(
//       `${BASE_URL}?key=${KEY}&q=${this.query}=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
//     )
//       .then(response => response.json())
//       .then(data => {
//         this.incrementPage();
//         const totalHits = data.totalHits;
//         console.log(data.totalHits);
//         return data.hits;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get searchQuery() {
//     return this.query;
//   }

//   set searchQuery(newQuery) {
//     this.query = newQuery;
//   }
// }

// --------- Вызов Репета ---------
// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29504531-9bab283f8cb4291b644273701';
// fetch(
//   `${BASE_URL}?key=${KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
// )
//   .then(r => r.json())
//   .then(console.log);

// ------- 3 способ --------------
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
