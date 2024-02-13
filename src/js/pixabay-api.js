import axios from 'axios';

export async function getGallery(queryName) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    
    const url = `${BASE_URL}${END_POINT}`;
     
    const response = await axios.get(url, {
        params: {
        key: "42112521-3ff4dfc201bab0977369cd2bc",
        q: queryName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',  
        }
    });
       
    return response.data;
}
// fetch