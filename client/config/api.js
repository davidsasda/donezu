const axios = require('axios');

const baseURL = process.env.SERVER_URI || 'http://localhost:3000';

export default axios.create({
  baseURL: baseURL
})