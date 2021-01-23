import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/search/movie?api_key=XXXX&query=Ponyo&year=2008",
});

export default instance