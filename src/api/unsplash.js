import axios from 'axios';

const unsplashAccessKey = "bc71c119c8d044f07f697803918f98944e42d82afd017ba7741a970768e105ea";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: "Client-ID " + unsplashAccessKey
    }
});
