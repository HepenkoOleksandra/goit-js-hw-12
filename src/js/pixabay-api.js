import axios from 'axios';
import { page, per_page, query } from '../main';

export async function getGallery() {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    
    const url = `${BASE_URL}${END_POINT}`;
     
    const response = await axios.get(url, {
        params: {
        key: "42112521-3ff4dfc201bab0977369cd2bc",
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',  
        page: page,
        per_page: per_page
        }
    });
       
    return response.data;
}
// fetch