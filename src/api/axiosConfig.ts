import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer OQ.M2TS7wX5kVnDhTXk0SM7Qjeaqi2W6iHvswfYhImdscWSMKzGXQFMMMgjsy02`,
  },
});

export {api};
