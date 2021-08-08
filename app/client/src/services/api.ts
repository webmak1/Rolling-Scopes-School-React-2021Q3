import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://conduit.productionready.io/api/articles',
  timeout: 100500,
});

export default axiosInstance;
