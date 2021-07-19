import config from './config';
import axios from 'axios';

const baseUrl = config.BaseURL

const getRequest = (url, base = baseUrl) =>
  axios
    .get(`${base}/${url}`)
    .then((r) => r)
    .catch((e) => console.log(e.message));







export default getRequest;