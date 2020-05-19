import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'localhost:3001';

const configuredAxios = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3500/',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export { configuredAxios as default };
