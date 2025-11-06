import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer MQ.3pqDCxhdqYnyg499iCKq82d4NKdHcCHsPx79uKtD2nYDthNIlHLpblUmO_54`,
  },
});

export {api};
