import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29504531-9bab283f8cb4291b644273701';

async function fetchImages(name, page, perPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };
